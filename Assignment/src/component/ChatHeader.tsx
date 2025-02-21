import React from "react";
import { Box, Typography } from "@mui/material";
import { ChatHeaderProps } from "../utils/ChatInterfaces";

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
    >
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default ChatHeader;
