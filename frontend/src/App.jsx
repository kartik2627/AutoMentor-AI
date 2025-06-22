import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [goal, setGoal] = useState("");
  const [background, setBackground] = useState("");
  const [roadmap, setRoadmap] = useState("");

  const backendUrl = "https://your-railway-url.up.railway.app";

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${backendUrl}/suggest-roles`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(res.data.response);
  };

  const handleRoadmap = async () => {
    const res = await axios.post(`${backendUrl}/generate-roadmap`, null, {
      params: {
        role: goal,
        background: background,
      },
    });
    setRoadmap(res.data.roadmap);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">AutoMentor AI</h1>
      <div>
        <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
          Suggest Roles
        </button>
        <div className="mt-2 whitespace-pre-wrap bg-gray-100 p-3 rounded">{result}</div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Get Your Learning Roadmap</h2>
        <input
          type="text"
          placeholder="Target Role (e.g. Data Scientist)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border p-2 w-full mt-1"
        />
        <textarea
          placeholder="Your background summary"
          rows={3}
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="border p-2 w-full mt-2"
        />
        <button
          onClick={handleRoadmap}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
        >
          Generate Roadmap
        </button>
        <div className="mt-4 whitespace-pre-wrap bg-green-100 p-3 rounded">{roadmap}</div>
      </div>
    </div>
  );
}

export default App;