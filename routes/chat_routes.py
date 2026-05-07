from fastapi import APIRouter

from services.embedding_service import create_embedding
from services.vector_service import search_similar_chunks
from services.llm_service import generate_answer

router = APIRouter()

@router.get("/ask")
async def ask_question(question: str):

    question_vector = create_embedding(question)

    retrieved_chunks = search_similar_chunks(question_vector)

    context = "\n\n".join(retrieved_chunks)

    answer = generate_answer(context, question)

    return {
        "question": question,
        "answer": answer,
        "matched_chunks": retrieved_chunks
    }