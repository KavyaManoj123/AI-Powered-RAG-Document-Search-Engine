from sentence_transformers import SentenceTransformer
import os

os.environ["TOKENIZERS_PARALLELISM"] = "false"

model = None

def get_model():
    global model

    if model is None:
        model = SentenceTransformer(
            "sentence-transformers/paraphrase-MiniLM-L3-v2",
            device="cpu"
        )

    return model


def create_embedding(text):
    embedding_model = get_model()
    return embedding_model.encode(text).tolist()


def create_embeddings(chunks):
    embedding_model = get_model()
    return embedding_model.encode(chunks).tolist()