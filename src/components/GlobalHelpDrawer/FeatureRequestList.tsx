import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetFeatureRequestsQuery } from "../../api/featureRequestApi";

const FeatureRequestList: React.FC = () => {
  const { data, isLoading, error } = useGetFeatureRequestsQuery();

  if (isLoading) return <Typography>Загрузка...</Typography>;
  if (error) return <Typography>Ошибка при загрузке данных</Typography>;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Все запросы пользователей
      </Typography>

      {data?.map((req) => (
        <Accordion key={req.id} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" color="textSecondary">
              [{new Date(req.createdAt).toLocaleString()}] {req.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{req.message}</Typography>
            <Divider sx={{ my: 1 }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FeatureRequestList;
