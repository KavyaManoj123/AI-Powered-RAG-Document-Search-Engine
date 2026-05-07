import chromadb

chroma_client = chromadb.PersistentClient(path="chroma_db")

collection = chroma_client.get_or_create_collection(
    name="pdf_documents"
)

def store_embeddings(file_name, chunks, vectors):

    for index, chunk in enumerate(chunks):

        collection.add(
            ids=[f"{file_name}_{index}"],
            embeddings=[vectors[index].tolist()],
            documents=[chunk],
            metadatas=[{"source": file_name}]
        )

def search_similar_chunks(question_vector, n_results=3):

    results = collection.query(
        query_embeddings=[question_vector],
        n_results=n_results
    )

    return results["documents"][0]