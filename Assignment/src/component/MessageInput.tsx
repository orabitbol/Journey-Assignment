import React from "react";
import { TextareaAutosize, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MessageInputProps } from "../utils/ChatInterfaces";

const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  handleSend,
}) => (
  <Paper
    elevation={1}
    style={{
      display: "flex",
      alignItems: "center",
      width: "410px",
      padding: "8px",
    }}
  >
    <TextareaAutosize
      minRows={1}
      maxRows={3}
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      }}
      style={{
        width: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        fontSize: "16px",
        padding: "8px",
        fontFamily: "inherit",
      }}
    />
    <IconButton color="primary" onClick={handleSend}>
      <SendIcon />
    </IconButton>
  </Paper>
);

export default MessageInput;
