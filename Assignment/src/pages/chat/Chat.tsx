import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import debounce from "lodash.debounce";
import { Message } from "../../utils/ChatInterfaces";
import ChatHeader from "../../component/ChatHeader";
import MessageList from "../../component/MessageList";
import MessageInput from "../../component/MessageInput";
import "./chat.css";

const Chat: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem(`chatMessages_${sessionId}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const loadOlderMessages = () => {
    if (!hasMoreMessages) return;
    const olderMessages = Array.from({ length: 10 }, (_, i) => ({
      sender: "Bot",
      text: `Older message ${i + 1}`,
      timestamp: new Date().toLocaleTimeString(),
    }));
    setMessages((prev) => [...olderMessages, ...prev]);
    setHasMoreMessages(false);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const timestamp = new Date().toLocaleTimeString();
    const newMessage: Message = { sender: "User", text: input, timestamp };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(
      `chatMessages_${sessionId}`,
      JSON.stringify(updatedMessages)
    );

    setIsTyping(true);
    setTimeout(() => {
      const botMessage: Message = {
        sender: "Bot",
        text: `Echo: ${input}`,
        timestamp: new Date().toLocaleTimeString(),
      };
      const finalMessages = [...updatedMessages, botMessage];
      setMessages(finalMessages);
      localStorage.setItem(
        `chatMessages_${sessionId}`,
        JSON.stringify(finalMessages)
      );
      setIsTyping(false);
    }, 1000);

    setInput("");
  };

  const debouncedHandleSend = debounce(handleSend, 300);

  return (
    <Container
      maxWidth="sm"
      className={isFullScreen ? "fullscreen-chat" : ""}
      sx={{
        position: isFullScreen ? "fixed" : "relative",
        top: isFullScreen ? 0 : "auto",
        left: isFullScreen ? 0 : "auto",
        width: isFullScreen ? "100vw" : "auto",
        height: isFullScreen ? "100vh" : "auto",
        zIndex: isFullScreen ? 1300 : "auto",
        backgroundColor: "background.paper",
        padding: isFullScreen ? 0 : undefined,
      }}
    >
      <div className="chat-container">
        <ChatHeader title="AI Consulting Chat" />
        <Box
          display="flex"
          justifyContent=""
          sx={{ alignItems: "center" }}
          mt={1}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/settings")}
            sx={{ ml: 1, height: "40px" }}
          >
            Open Settings
          </Button>
          <Tooltip title={isFullScreen ? "Exit Full Screen" : "Full Screen"}>
            <IconButton onClick={() => setIsFullScreen((prev) => !prev)}>
              {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </div>

      <Card variant="outlined" sx={{ my: 2 }}>
        <CardContent>
          <MessageList
            messages={messages}
            onScroll={loadOlderMessages}
            isTyping={isTyping}
          />

          <Box display="flex" mt={2}>
            <MessageInput
              input={input}
              setInput={setInput}
              handleSend={debouncedHandleSend}
            />
          </Box>
        </CardContent>
      </Card>

      <style>
        {`@keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }`}
      </style>
    </Container>
  );
};

export default Chat;
