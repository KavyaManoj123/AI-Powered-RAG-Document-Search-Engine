from fastapi import APIRouter, UploadFile, File
import os

from services.pdf_service import extract_text_from_pdf, create_chunks
from services.embedding_service import create_embeddings
from services.vector_service import store_embeddings

router = APIRouter()

UPLOAD_DIR = "uploads"

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    text = extract_text_from_pdf(file_path)

    chunks = create_chunks(text)

    vectors = create_embeddings(chunks)

    store_embeddings(file.filename, chunks, vectors)

    return {
        "filename": file.filename,
        "total_chunks": len(chunks)
    }