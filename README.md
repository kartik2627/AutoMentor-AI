# 🧠 AutoMentor AI – Your Personalized AI Career Assistant

## 📌 Project Description

**AutoMentor AI** is a personalized career guidance web application powered by **OpenAI GPT-4o**. It helps users—especially students, freshers, or job switchers—by analyzing their **PDF resumes** and offering:

1. **Role Suggestions** based on resume content  
2. **6-Week Learning Roadmaps** for targeted job roles

It uses **Generative AI** to provide actionable, human-like mentorship at scale—without needing a real mentor.

---

## 🏗️ What We Built

### 🔙 Backend – FastAPI + OpenAI

- Accepts uploaded **PDF resumes**
- Extracts text using `PyMuPDF`
- Sends prompts to OpenAI GPT-4o for:
  - Role recommendations
  - Custom career learning plans
- Hosted on **Railway**

### 🎨 Frontend – ReactJS

- Simple and elegant UI with:
  - PDF upload
  - Suggested career roles display
  - Input field for career goal
  - Button to generate AI-powered roadmaps
- Hosted on **Vercel**

### 🔐 Secure API Key Handling

- OpenAI API key stored via environment variables in `.env`
- Loaded securely using `python-dotenv`

---

## 💡 Why This Project is Helpful

| Problem | Solution |
|--------|----------|
| 🎯 Students don’t know which roles fit their profile | Resume-to-role suggestions using LLM |
| 📚 Learning paths online are generic or overwhelming | Personalized 6-week roadmaps based on your resume |
| 🤖 No time or money for career coaches | AI-powered mentoring that’s free and fast |

---

## 🔍 Key Features

- 📎 Upload PDF Resume
- 🎯 Get 3 AI-suggested job roles
- 🗺️ Get a 6-week learning plan based on your goal
- 🧠 Built using **OpenAI GPT-4o**, FastAPI, and React
- ☁️ Deployed online using **Railway (backend)** and **Vercel (frontend)**

---

## 🧠 Tech Stack

- **Frontend:** React, JavaScript, Axios, Tailwind CSS (optional)
- **Backend:** FastAPI, Uvicorn, PyMuPDF, OpenAI API
- **Hosting:** Railway (API), Vercel (Web App)
- **Other Tools:** Git, GitHub, Python-dotenv, VS Code

---

## 📈 Future Improvements

- 🎙️ Add voice-based Q&A using Whisper + GPT-4o
- 🤝 Add JD-to-resume matcher for better job targeting
- 📸 Add screenshot-based feedback using GPT-4o’s multimodal features
- 🔁 Save multiple roadmaps and track learning progress