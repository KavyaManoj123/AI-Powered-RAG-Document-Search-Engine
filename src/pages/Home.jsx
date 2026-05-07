import { useState } from 'react';
import UploadSection from '../components/UploadSection';
import ChatSection from '../components/ChatSection';

export default function Home() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex flex-col md:flex-row h-dvh bg-slate-950 text-white overflow-hidden">
      {/* Sidebar */}
      <div
        className="
        w-full 
        md:w-[320px] 
        border-b md:border-b-0 md:border-r 
        border-slate-800 
        p-5
      "
      >
        <UploadSection />
      </div>

      {/* Chat */}
      <div className="flex-1 min-h-0">
        <ChatSection messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}
