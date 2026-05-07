from fastapi import APIRouter, UploadFile, File
import os

from services.pdf_service import extract_text_from_pdf, create_chunks
from services.memory_store import uploaded_chunks

router = APIRouter()

UPLOAD_DIR = "uploads"

# create uploads folder if not exists
os.makedirs(UPLOAD_DIR, exist_ok=True)

# temporary memory storage
# uploaded_chunks = []

@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    text = extract_text_from_pdf(file_path)

    chunks = create_chunks(text)

    # temporarily store chunks
    uploaded_chunks.clear()
    uploaded_chunks.extend(chunks)

    return {
        "message": "PDF uploaded successfully",
        "filename": file.filename,
        "total_chunks": len(chunks)
    }




# from fastapi import APIRouter, UploadFile, File
# import os

# from services.pdf_service import extract_text_from_pdf, create_chunks
# from services.embedding_service import create_embeddings
# from services.vector_service import store_embeddings

# router = APIRouter()

# UPLOAD_DIR = "uploads"

# @router.post("/upload-pdf")
# async def upload_pdf(file: UploadFile = File(...)):

#     file_path = os.path.join(UPLOAD_DIR, file.filename)

#     with open(file_path, "wb") as f:
#         f.write(await file.read())

#     text = extract_text_from_pdf(file_path)

#     chunks = create_chunks(text)

#     vectors = create_embeddings(chunks)

#     store_embeddings(file.filename, chunks, vectors)

#     return {
#         "filename": file.filename,
#         "total_chunks": len(chunks)
#     }