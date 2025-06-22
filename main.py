from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from dotenv import load_dotenv
import fitz  # PyMuPDF
import os

load_dotenv()
app = FastAPI()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def extract_text_from_pdf(file_bytes):
    doc = fitz.open(stream=file_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

@app.post("/suggest-roles")
async def suggest_roles(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text_from_pdf(contents)
    prompt = f"You are a career mentor AI. Suggest 3 roles based on this resume:\n{text}"
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    return {"response": response.choices[0].message.content}

@app.post("/generate-roadmap")
async def generate_roadmap(role: str, background: str = ""):
    prompt = f"""You are a career coach AI. Create a 6-week roadmap for a {role} based on: {background}"""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    return {"roadmap": response.choices[0].message.content}