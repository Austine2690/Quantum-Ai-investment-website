
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, X, Loader2, Mail, Shield } from 'lucide-react';
import { getFinancialAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '[SYSTEM_INIT] Neural interface active. Quantum Strategist standing by. Provide inquiry parameters for wealth optimization.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getFinancialAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || "[ERROR] Network out of sync. Contact support." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black border border-amber-500/40 text-amber-500 p-5 rounded-none shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center transition-all hover:bg-amber-600 hover:text-black hover:border-amber-600 group"
        >
          <div className="relative">
            <MessageSquare className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 border-2 border-black rounded-full animate-pulse"></span>
          </div>
        </button>
      ) : (
        <div className="w-[400px] h-[600px] bg-black border border-amber-500/30 rounded-none shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-[#080808] p-6 flex items-center justify-between border-b border-amber-500/20">
            <div className="flex items-center gap-4">
              <div className="bg-amber-500/5 p-3 border border-amber-500/30">
                <Bot className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Quantum Strategist</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-[9px] text-amber-500 font-black uppercase tracking-widest">Neural Link Est.</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-amber-500 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] p-5 text-[11px] leading-relaxed font-mono tracking-wider uppercase border ${
                    m.role === 'user'
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  <span className="block mb-2 text-[8px] opacity-40 font-black">[{m.role.toUpperCase()}_ID_0x{i}]</span>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-amber-500/5 p-5 border border-amber-500/20 flex items-center gap-4">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                  <span className="text-[9px] text-amber-500 font-black uppercase tracking-[0.4em]">Deciphering...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 bg-[#080808] border-t border-amber-500/20">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="PROMPT_NEURAL_CORE..."
                className="flex-1 bg-black text-amber-500 text-[11px] font-mono border border-amber-500/20 px-5 py-4 focus:outline-none focus:border-amber-500 placeholder:text-slate-800 uppercase"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-500 p-4 text-black transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
