import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  List,
  ListItem,
  Box,
  CircularProgress,
  Typography,
  Avatar,
} from "@mui/material";
import { MessageListProps } from "../utils/ChatInterfaces";

const MessageList: React.FC<MessageListProps> = ({
  messages,
  isTyping,
  onScroll,
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  const renderers = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    paragraph: ({ children }: { children: React.ReactNode }) => (
      <p style={{ margin: 0, whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
        {children}
      </p>
    ),
  };

  return (
    <List
      onScroll={() => {
        const list = messagesEndRef.current?.parentElement;
        if (list && list.scrollTop === 0) {
          onScroll();
        }
      }}
      sx={{
        height: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: 1,
        p: 1,
        "&::-webkit-scrollbar": {
          width: "12px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "primary.main",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#1565c0",
        },
      }}
    >
      {messages.map((msg, index) => (
        <ListItem
          key={index}
          sx={{
            justifyContent: msg.sender === "User" ? "flex-end" : "flex-start",
            opacity: 0,
            animation: "fadeIn 0.5s ease forwards",
          }}
        >
          <Avatar
            sx={{
              bgcolor:
                msg.sender === "User" ? "primary.main" : "secondary.main",
              mr: 1,
            }}
          >
            {msg.sender.charAt(0)}
          </Avatar>
          <Box
            sx={{
              bgcolor: msg.sender === "User" ? "primary.main" : "grey.300",
              color: msg.sender === "User" ? "white" : "black",
              borderRadius: 2,
              p: 1.5,
              maxWidth: "70%",
              whiteSpace: "normal",
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            <ReactMarkdown components={renderers}>{msg.text}</ReactMarkdown>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "right",
                marginTop: "4px",
                whiteSpace: "nowrap",
              }}
            >
              {msg.timestamp}
            </Typography>
          </Box>
        </ListItem>
      ))}

      {isTyping && (
        <ListItem sx={{ justifyContent: "flex-start" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress size={20} sx={{ mr: 1 }} />
            <Typography variant="body2">Bot is typing...</Typography>
          </Box>
        </ListItem>
      )}

      <div ref={messagesEndRef} />
    </List>
  );
};

export default MessageList;
