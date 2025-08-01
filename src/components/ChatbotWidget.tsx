// src/components/ChatbotWidget.jsx
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Only add the script if it doesn't already exist
    if (!document.getElementById("elevenlabs-convai-script")) {
      const script = document.createElement("script");
      script.id = "elevenlabs-convai-script";
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<elevenlabs-convai
          agent-id="agent_9201k18kw3kyebeavdmdmf6gaafs"
          style="position: fixed; bottom: 24px; right: 24px; z-index: 9999;"
        ></elevenlabs-convai>`
      }}
    />
  );
};

export default ChatbotWidget;
