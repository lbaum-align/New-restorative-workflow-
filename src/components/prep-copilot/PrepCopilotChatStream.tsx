import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from './types';
import { TYPING_SPEED_MS } from './constants';

interface ChatStreamProps {
  messages: ChatMessage[];
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const [revealedChars, setRevealedChars] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!message.isTyping) {
      setRevealedChars(message.text.length);
      return;
    }

    setRevealedChars(0);
    timerRef.current = setInterval(() => {
      setRevealedChars(prev => {
        if (prev >= message.text.length) {
          clearInterval(timerRef.current);
          return message.text.length;
        }
        return prev + 1;
      });
    }, TYPING_SPEED_MS);

    return () => clearInterval(timerRef.current);
  }, [message.text, message.isTyping]);

  const displayText = message.text.slice(0, revealedChars);
  const isStillTyping = message.isTyping && revealedChars < message.text.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col gap-1"
    >
      <span className="text-[11px] font-medium text-[#8B5CF6] tracking-wide uppercase">
        {message.agentName}
      </span>
      <div className="bg-[#f1f5f9] rounded-[8px] rounded-tl-[2px] px-3 py-2">
        <p className="text-[13px] leading-[18px] text-[#374151] font-['Roboto',sans-serif]">
          {displayText}
          {isStillTyping && (
            <span className="inline-block w-[2px] h-[13px] bg-[#8B5CF6] ml-[1px] animate-pulse align-middle" />
          )}
        </p>
      </div>
    </motion.div>
  );
}

export default function PrepCopilotChatStream({ messages }: ChatStreamProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages.length]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
      style={{ minHeight: 0 }}
    >
      <AnimatePresence mode="popLayout">
        {messages.map(msg => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </AnimatePresence>
    </div>
  );
}
