# AI-Powered RAG Document Search Engine

An AI-powered document search and question-answering system built using **FastAPI**, **React**, **Groq LLM**, and **RAG (Retrieval-Augmented Generation)** architecture.

Users can upload PDF documents and ask questions in natural language. The application extracts document content, processes it into chunks, and generates AI-powered answers based on the uploaded content.

---

# 🚀 Features

- 📄 Upload PDF documents
- 🤖 AI-powered question answering
- 🔍 RAG-based document retrieval system
- ⚡ FastAPI backend
- 🎨 React + Tailwind frontend
- 🌐 REST API architecture
- ☁️ Deployed using Render + Vercel
- 💬 Chat-style interface
- 📱 Responsive UI

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS

## Backend
- FastAPI
- Python

## AI / NLP
- Groq API
- RAG Architecture

## Database / Storage
- ChromaDB (Initial Implementation)

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```bash
AI-Powered-RAG-Document-Search-Engine/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   └── requirements.txt
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/KavyaManoj123/AI-Powered-RAG-Document-Search-Engine.git
```

---

# Backend Setup

## 2️⃣ Navigate to Backend

```bash
cd backend
```

---

## 3️⃣ Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 5️⃣ Create Environment File

Create:

```bash
backend/.env
```

Add:

```env
GROQ_API_KEY=your_groq_api_key
```

---

## 6️⃣ Run Backend

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

## 7️⃣ Navigate to Client

```bash
cd client
```

---

## 8️⃣ Install Dependencies

```bash
npm install
```

---

## 9️⃣ Create Frontend Environment File

Create:

```bash
client/.env
```

Add:

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

## 🔟 Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 📡 API Endpoints

## Upload PDF

```http
POST /upload-pdf
```

Uploads and processes PDF documents.

---

## Ask Questions

```http
GET /ask?question=your_question
```

Returns AI-generated answers based on uploaded documents.

---

# 🌍 Deployment

## Frontend
Deployed on Vercel

## Backend
Deployed on Render

---

# 🔮 Future Improvements

- Multi-document support
- Chat history
- User authentication
- Persistent vector database
- Semantic search optimization
- Streaming AI responses
- Multiple chat sessions
- Cloud storage integration

---

# 📸 Screenshots

![AI Search Engine](./assets/homeUI.png)


---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

## Kavya Manoj

- GitHub: https://github.com/KavyaManoj123

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
