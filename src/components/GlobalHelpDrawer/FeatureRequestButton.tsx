import React, { useState } from "react";
import {
  Box,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import BtnCustom from "../../ui/BtnCustom";
import { toast } from "react-toastify";
import { useSendFeatureRequestMutation } from "../../api/featureRequestApi";

const categories = [
  { value: "feature", label: "Новая функция" },
  { value: "improvement", label: "Улучшение текущей функциональности" },
  { value: "bug", label: "Баг / ошибка" },
  { value: "other", label: "Другое" },
];

const FeatureRequestButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [sendFeatureRequest, { isLoading }] = useSendFeatureRequestMutation();

  const handleSubmit = async () => {
    try {
      await sendFeatureRequest({ category, message }).unwrap();
      toast.success("Запрос успешно отправлен!");
      setOpen(false);
      setCategory("");
      setMessage("");
    } catch (error) {
      toast.error("Ошибка при отправке запроса. Попробуйте позже.");
    }
  };

  return (
    <>
      <Box sx={{ position: "absolute", bottom: 20, right: 20 }}>
        <Fab color="info" size="medium" onClick={() => setOpen(true)}>
          <MapsUgcIcon />
        </Fab>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Оставить запрос или предложение</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Поделитесь своими идеями, замечаниями или ошибками — это поможет нам
            сделать сервис лучше!
          </Typography>
          <TextField
            select
            label="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": { borderRadius: "20px" },
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Описание"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": { borderRadius: "20px" },
            }}
          />
        </DialogContent>
        <DialogActions>
          <BtnCustom text="Отмена" onClick={() => setOpen(false)}></BtnCustom>
          <BtnCustom
            text="Отправить"
            onClick={handleSubmit}
            variant="contained"
            disabled={!category || !message}
          ></BtnCustom>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FeatureRequestButton;
