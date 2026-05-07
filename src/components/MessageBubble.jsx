export default function MessageBubble({ message }) {
  return (
    <div
      className={`max-w-3xl p-4 rounded-2xl ${
        message.type === "user"
          ? "bg-blue-600 ml-auto"
          : "bg-slate-800"
      }`}
    >
      <p>{message.text}</p>

      {message.chunks && (
        <div className="mt-4">
          <h3 className="text-sm text-slate-400 mb-2">
            Retrieved Chunks
          </h3>

          <div className="space-y-2">
            {message.chunks.map((chunk, index) => (
              <div
                key={index}
                className="bg-slate-900 p-3 rounded-lg text-sm text-slate-300"
              >
                {chunk}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}