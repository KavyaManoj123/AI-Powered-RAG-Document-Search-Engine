import { useState } from 'react';
import { uploadPDF } from '../services/api';

import toast from 'react-hot-toast';

export default function UploadSection() {
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState('');

  const handleUpload = async e => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setLoading(true);

      const result = await uploadPDF(file);

      console.log(result);

      setUploadedFile(result.filename);

      toast.success('PDF uploaded successfully');
    } catch (error) {
      console.error(error);

      toast.error('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">AI Document Search</h1>

      <label className="border-2 border-dashed border-slate-700 p-8 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
        <input
          type="file"
          className="hidden"
          accept=".pdf"
          onChange={handleUpload}
        />

        <p className="text-slate-300">Upload PDF</p>
      </label>

      {loading && <p className="mt-4 text-blue-400">Uploading...</p>}

      {uploadedFile && (
        <div className="mt-4 bg-green-500/10 border border-green-500 p-3 rounded-xl">
          <p className="text-green-400 text-sm">Uploaded: {uploadedFile}</p>
        </div>
      )}
    </div>
  );
}
