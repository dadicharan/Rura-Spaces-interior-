
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Fix for Error: Cannot find namespace 'NodeJS'. Use ReturnType<typeof setTimeout> for environment-agnostic compatibility.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chatRef = useRef<any>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Greetings! I'm RuRa, your personal design consultant at RuRa Spaces.");
      timeoutRef.current = setTimeout(() => {
        addBotMessage("How can I help you transform your space today? We specialize in premium interiors, architecture, and landscape design.");
      }, 800);
    }
    scrollToBottom();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { sender: 'bot', text }]);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isGenerating) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputValue('');
    setIsGenerating(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date configuration.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      if (!chatRef.current) {
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `You are RuRa, a sophisticated and helpful personal design consultant for RuRa Spaces, a premium interior, architecture, and landscape design firm in Hyderabad. 
            Your tone is elegant, professional, and inspiring. 
            Your goal is to assist users with their design queries and collect project details if they express interest.
            Key info about RuRa Spaces:
            - 150+ homes transformed across Hyderabad.
            - 100% on-time delivery guarantee.
            - Specializes in high-end residential interiors (3BHK, Villas), architecture, and landscape.
            - Locations: Gachibowli Financial District, Miyapur, Pragathi Nagar, etc.
            - Design process: Requirement discussion -> Site visit -> 3D visualization -> Material selection -> Execution -> Handover.
            Be concise but sophisticated.`,
          },
        });
      }

      const response = await chatRef.current.sendMessage({ message: userMsg });
      // Use the .text property directly as per Gemini API guidelines (do not call as a function).
      const botText = response.text || "I'm sorry, I'm having trouble responding right now.";
      addBotMessage(botText);
    } catch (error) {
      console.error("Gemini Chatbot Error:", error);
      addBotMessage("I'm momentarily unavailable. Please feel free to reach out to our team at hello@ruraspaces.com or +91 98765 43210.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-mutedGold text-ivory rounded-full shadow-[0_10px_40px_-10px_rgba(197,160,89,0.5)] flex items-center justify-center hover:scale-110 transition-all hover:bg-matteBlack"
          aria-label="Open Chat"
        >
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="w-[320px] md:w-[380px] h-[500px] bg-ivory shadow-2xl rounded-xl flex flex-col overflow-hidden border border-matteBlack/5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-matteBlack p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-mutedGold rounded-full flex items-center justify-center text-ivory">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-ivory text-sm font-serif">RuRa Concierge</h3>
                <span className="text-[9px] text-mutedGold uppercase tracking-widest font-bold">AI Support</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-ivory/60 hover:text-ivory transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9F7F2]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-mutedGold text-ivory rounded-l-xl rounded-tr-xl' 
                    : 'bg-white text-charcoal rounded-r-xl rounded-tl-xl border border-charcoal/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-white text-charcoal rounded-r-xl rounded-tl-xl border border-charcoal/5 p-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-mutedGold rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-mutedGold rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-mutedGold rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-charcoal/5 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isGenerating ? "RuRa is thinking..." : "Type your query..."}
              disabled={isGenerating}
              className="flex-1 bg-beige/30 border-none px-4 py-2 text-sm focus:ring-1 focus:ring-mutedGold outline-none rounded-md disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={isGenerating || !inputValue.trim()}
              className="w-10 h-10 bg-matteBlack text-ivory flex items-center justify-center rounded-md hover:bg-mutedGold transition-all disabled:opacity-30"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
