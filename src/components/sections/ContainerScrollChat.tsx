"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  Bot,
  User,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SCROLL_SHOWCASE_CONTENT } from "@/data/content";

interface ChatMessage {
  id: string;
  sender: "user" | "ira";
  text: string;
  properties?: {
    name: string;
    location: string;
    price: string;
    matchScore: number;
    bhk: string;
    image: string;
    rera: string;
  }[];
}

const SAMPLE_MATCHES = [
  {
    name: "DLF The Arbour",
    location: "Sector 63, Golf Course Ext, Gurugram",
    price: "₹7.5 Cr",
    matchScore: 99,
    bhk: "4 BHK Luxury Residence",
    image: "/thumbs/joel-filipe-RFDP7_80v5A-unsplash.webp",
    rera: "RC/REP/HARERA/GGM/674/2023",
  },
  {
    name: "Godrej Tropical Isle",
    location: "Sector 146, Noida Expressway",
    price: "₹2.95 Cr",
    matchScore: 96,
    bhk: "3 BHK + Utility",
    image: "/thumbs/kirill-9uH-hM0VwPg-unsplash.webp",
    rera: "UPRERAPRJ303390",
  },
  {
    name: "BPTP Discovery Park",
    location: "Sector 80, Greater Faridabad",
    price: "₹85 Lakh",
    matchScore: 94,
    bhk: "2 BHK Contemporary",
    image: "/thumbs/prydumano-design-4Q9aOJF-6vI-unsplash.webp",
    rera: "HRERA-PKL-FBD-112-2018",
  },
];

export function ContainerScrollChat() {
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ira",
      text: SCROLL_SHOWCASE_CONTENT.chatPreview.welcomeMessage,
    },
    {
      id: "2",
      sender: "user",
      text: "3 BHK in Gurugram under ₹2 Cr, ready to move",
    },
    {
      id: "3",
      sender: "ira",
      text: "I analyzed 2,400+ verified NCR listings. Here are your highest-scoring matches with verified RERA documentation and immediate possession:",
      properties: SAMPLE_MATCHES.slice(0, 2),
    },
  ]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ira",
        text: `Matched with precision for "${text}". Found verified RERA listings tailored to your parameters:`,
        properties: SAMPLE_MATCHES,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  return (
    <section className="relative w-full bg-[#08090c] text-white overflow-hidden pt-0 pb-8">
      {/* Subtle Neutral Dark Graphite Vignette (zero parting line, seamlessly continuous with hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_15%,rgba(255,255,255,0.04)_0%,transparent_80%)] pointer-events-none" />

      <div className="w-full relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400">
                <Zap className="h-3 w-3 text-neutral-300" />
                {SCROLL_SHOWCASE_CONTENT.eyebrow}
              </span>
              <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {SCROLL_SHOWCASE_CONTENT.title}
              </h2>
              <p className="mt-1 text-xs md:text-sm text-neutral-400 max-w-xl mx-auto">
                {SCROLL_SHOWCASE_CONTENT.subtitle}
              </p>
            </div>
          }
        >
          {/* Linear-styled Interactive Chat Component (Apple Dark Grey UI) */}
          <div className="h-full w-full bg-[#111216] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden text-left font-sans shadow-2xl">
            {/* Linear Mac Window Titlebar */}
            <div className="h-10 bg-[#16171d] border-b border-white/[0.08] px-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs font-medium text-neutral-400 flex items-center gap-1.5">
                  <Bot className="h-3.5 w-3.5 text-neutral-300" />
                  {SCROLL_SHOWCASE_CONTENT.chatPreview.botName}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-neutral-300 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live RERA Feed
                </div>
                <span className="text-[11px] text-neutral-500">
                  250+ Verified Properties
                </span>
              </div>
            </div>

            {/* Chat Thread Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-[#111216] [scrollbar-width:none]">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-3 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "ira" && (
                      <div className="h-7 w-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0 mt-0.5">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 text-xs sm:text-sm ${
                        msg.sender === "user"
                          ? "bg-white text-black font-medium rounded-br-sm"
                          : "bg-[#181920] border border-white/[0.08] text-neutral-200 rounded-bl-sm"
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>

                      {/* Property Cards inside IRA response */}
                      {msg.properties && (
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {msg.properties.map((prop, idx) => (
                            <div
                              key={idx}
                              className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#1d1f27] hover:border-white/30 transition-all p-2.5 flex flex-col gap-2"
                            >
                              <div className="relative h-24 sm:h-28 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={prop.image}
                                  alt={prop.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
                                  <Sparkles className="h-2.5 w-2.5 text-neutral-300" />
                                  {prop.matchScore}% Match
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-white text-xs sm:text-sm truncate">
                                    {prop.name}
                                  </h4>
                                  <span className="font-bold text-neutral-200 text-xs sm:text-sm">
                                    {prop.price}
                                  </span>
                                </div>
                                <p className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5">
                                  <MapPin className="h-3 w-3 shrink-0 text-neutral-500" />
                                  <span className="truncate">{prop.location}</span>
                                </p>
                                <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400 border-t border-white/[0.06] pt-1.5">
                                  <span className="flex items-center gap-1 text-emerald-400">
                                    <ShieldCheck className="h-3 w-3" />
                                    RERA Verified
                                  </span>
                                  <span className="text-neutral-300 font-medium">
                                    {prop.bhk}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {msg.sender === "user" && (
                      <div className="h-7 w-7 rounded-full bg-neutral-700 flex items-center justify-center text-white shrink-0 mt-0.5">
                        <User className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 items-center text-neutral-400 text-xs pl-10"
                >
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span>IRA is scanning RERA registry & matching scores…</span>
                </motion.div>
              )}
            </div>

            {/* Chat Input Bar Footer */}
            <div className="p-2.5 bg-[#16171d] border-t border-white/[0.08] flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={SCROLL_SHOWCASE_CONTENT.chatPreview.inputPlaceholder}
                className="flex-1 bg-[#1c1d25] text-white text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-white/30 placeholder-neutral-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-white text-black hover:bg-neutral-200 p-2 rounded-lg transition-colors flex items-center justify-center shrink-0"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
