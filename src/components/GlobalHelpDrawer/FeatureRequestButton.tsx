import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";
import { toast } from "react-toastify";
import { useSendFeatureRequestMutation } from "../../api/featureRequestApi";
import { menu_item_sx, textField_input_sx } from "../../styles/global";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import CustomToast from "../../ui/CustomToast";

const categories = [
  { value: "feature", label: "Новая функция" },
  { value: "improvement", label: "Улучшение текущей функциональности" },
  { value: "bug", label: "Баг / ошибка" },
  { value: "other", label: "Другое" },
];

interface FeatureRequestButtonProps {
  open: boolean;
  onClose: () => void;
}

const FeatureRequestButton: React.FC<FeatureRequestButtonProps> = ({
  open,
  onClose,
}) => {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [sendFeatureRequest] = useSendFeatureRequestMutation();

  const handleSubmit = async () => {
    try {
      await sendFeatureRequest({ category, message }).unwrap();

      toast(
        <CustomToast
          message={"Запрос успешно отправлен!"}
          icon={<MarkEmailReadIcon sx={{ color: "white" }} />}
        />
      );

      onClose();
      setCategory("");
      setMessage("");
    } catch (error) {
      toast.error("Ошибка при отправке запроса. Попробуйте позже.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
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
          sx={textField_input_sx}
        >
          {categories.map((option) => (
            <MenuItem sx={menu_item_sx} key={option.value} value={option.value}>
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
          sx={textField_input_sx}
        />
      </DialogContent>
      <DialogActions>
        <BtnCustom text="Отмена" customColor="#846ee6" onClick={onClose} />
        <BtnCustom
          text="Отправить"
          customColor="#846ee6"
          onClick={handleSubmit}
          variant="contained"
          disabled={!category || !message}
        />
      </DialogActions>
    </Dialog>
  );
};

export default FeatureRequestButton;
