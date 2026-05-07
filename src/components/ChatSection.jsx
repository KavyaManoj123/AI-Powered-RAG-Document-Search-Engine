import { useState } from 'react';
import { askQuestion } from '../services/api';
import MessageBubble from './MessageBubble';

export default function ChatSection({ messages, setMessages }) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const sendQuestion = async () => {
    if (!question.trim()) return;

    const userMessage = {
      type: 'user',
      text: question,
    };

    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    const result = await askQuestion(question);

    const aiMessage = {
      type: 'ai',
      text: result.answer,
      //   chunks: result.matched_chunks,
    };

    setMessages(prev => [...prev, aiMessage]);

    setQuestion('');

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 min-h-0">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}

        {loading && <p className="text-slate-400">AI is thinking...</p>}
      </div>

      {/* Input */}
      <div className="border-t border-slate-800 p-4 flex gap-3 flex-col sm:flex-row">
        <input
          value={question}
          onChange={e => setQuestion(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !loading) {
              sendQuestion();
            }
          }}
          placeholder="Ask about your PDF..."
          className="
  flex-1 
  w-full
  bg-slate-900 
  border border-slate-700 
  rounded-xl 
  px-4 py-3 
  outline-none
"
        />

        <button
          onClick={sendQuestion}
          className="
    bg-blue-600 hover:bg-blue-700 
    px-5 py-3 rounded-xl
    w-full sm:w-auto
  "
        >
          Send
        </button>
      </div>
    </div>
  );
}
