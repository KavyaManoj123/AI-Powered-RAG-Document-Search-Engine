const BASE_URL = import.meta.env.VITE_API_URL;

export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/upload-pdf`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export const askQuestion = async (question) => {
  const response = await fetch(
    `${BASE_URL}/ask?question=${question}`
  );

  return response.json();
};