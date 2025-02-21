import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Box } from "@mui/material";
import ThemeSwitch from "../../component/ThemeSwitch";
import { SettingsProps } from "../../utils/ChatInterfaces";


const Settings: React.FC<SettingsProps> = ({
  darkMode,
  setDarkMode,
  resetHistory,
}) => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>

        <Button variant="contained" color="secondary" onClick={resetHistory}>
          Reset Chat History
        </Button>

        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;
