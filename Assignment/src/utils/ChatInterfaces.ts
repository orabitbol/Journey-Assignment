export interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

export interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  resetHistory: () => void;
}

export interface ChatHeaderProps {
  title: string;
}

export interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export interface MessageListProps {
  messages: Message[];
  onScroll: () => void;
  isTyping: boolean;
}

export interface ThemeSwitchProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}


