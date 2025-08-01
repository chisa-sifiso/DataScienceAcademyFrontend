import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import ChatbotWidget from "@/components/ChatbotWidget"; // <-- Import the widget

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you with any questions about our Data Science programs. How can I assist you today?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question! I'd be happy to help you learn more about our programs. Would you like to know about our course curriculum, admission requirements, or career opportunities?",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-lg"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Render ChatbotWidget when chat is open */}
          <ChatbotWidget />

          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
          <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 flex flex-col bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 font-inter">Data Science Assistant</h3>
              <p className="text-sm text-gray-600">Ask me anything about our programs</p>
            </div>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-900 border border-gray-200'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            {/* Input */}
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </Card>
        </>
      )}
    </>
  );
};

export default Chatbot;
