import React from "react";
import { useGetFeatureRequestsQuery } from "../../api/api";
import { Box, Typography, Divider } from "@mui/material";

const FeatureRequestList: React.FC = () => {
  const { data, isLoading, error } = useGetFeatureRequestsQuery();

  if (isLoading) return <Typography>Загрузка...</Typography>;
  if (error) return <Typography>Ошибка при загрузке данных</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Все запросы пользователей
      </Typography>

      {data?.map((req) => (
        <Box key={req.id} mb={2}>
          <Typography variant="subtitle2" color="textSecondary">
            [{new Date(req.createdAt).toLocaleString()}] {req.category}
          </Typography>
          <Typography>{req.message}</Typography>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}
    </Box>
  );
};

export default FeatureRequestList;
