import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { testData } from "../data/testData";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState<string | null>(null);
  const [selectedTest, setSelectedTest] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setStoredName(savedName);
      setName(savedName);
    }
  }, []);

  const handleSubmit = () => {
    if (name && selectedTest) {
      if (!storedName) {
        localStorage.setItem("userName", name);
        setStoredName(name);
      }
      navigate("/test", { state: { name, selectedTest } });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Оцените уровень подготовки, пройдя тест.
      </Typography>

      {storedName ? (
        <Typography variant="h6" gutterBottom>
          Добро пожаловать,{" "}
          <span className={styles.userName}>{storedName}</span>!
        </Typography>
      ) : (
        <TextField
          fullWidth
          label="Введите ФИО"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <TextField
        fullWidth
        select
        label="Выберите тест"
        variant="outlined"
        margin="normal"
        value={selectedTest}
        onChange={(e) => setSelectedTest(e.target.value)}
      >
        {Object.entries(testData).map(([testKey, test]) => (
          <MenuItem key={test.id} value={testKey}>
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
