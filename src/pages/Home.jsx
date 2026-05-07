import { useState } from "react";
import UploadSection from "../components/UploadSection";
import ChatSection from "../components/ChatSection";

export default function Home() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      
      {/* Sidebar */}
      <div className="w-[320px] border-r border-slate-800 p-5">
        <UploadSection />
      </div>

      {/* Chat */}
      <div className="flex-1">
        <ChatSection
          messages={messages}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}