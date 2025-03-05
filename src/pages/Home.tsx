import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

const tests = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "SEMANTICS" },
  { id: 4, name: "BROWSER" },
  { id: 5, name: "JAVASCRIPT" },
];

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [selectedTest, setSelectedTest] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && selectedTest) {
      navigate("/test", { state: { name, selectedTest } });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Анкета
      </Typography>
      <TextField
        fullWidth
        label="Введите ФИО"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        select
        label="Выберите тест"
        variant="outlined"
        margin="normal"
        value={selectedTest}
        onChange={(e) => setSelectedTest(e.target.value)}
      >
        {tests.map((test) => (
          <MenuItem key={test.id} value={test.name}>
            {test.name}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Начать тест
      </Button>
    </Container>
  );
};

export default Home;
