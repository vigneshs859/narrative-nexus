import React from 'react';

const ChatbotPage = () => {
    return (
        <div>
            {/* Script to load the Chatbase chatbot */}
            <script>
                {`
                window.embeddedChatbotConfig = {
                    chatbotId: "ibM1A92krEOw6FQ2d0CKK",
                    domain: "www.chatbase.co"
                };
                `}
            </script>
            <script
                src="https://www.chatbase.co/embed.min.js"
                chatbotId="ibM1A92krEOw6FQ2d0CKK"
                domain="www.chatbase.co"
                defer
            ></script>

            {/* Iframe to display the Chatbase chatbot */}
            <iframe
                src="https://www.chatbase.co/chatbot-iframe/ibM1A92krEOw6FQ2d0CKK"
                title="Chatbot"
                width="100%"
                style={{ height: "100%", minHeight: "700px" }}
                frameBorder="0"
            ></iframe>
        </div>
    );
};

export default ChatbotPage;
