import React from "react";
import styles from "./FrontariumFeatures.module.scss";
import { featuresdata } from "../../DB/featuresdata";
import { Box, Typography } from "@mui/material";

export const FrontariumFeatures: React.FC = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Бонус Frontarium
      </Typography>

      <div className={styles.frontariumWrapper}>
        {featuresdata.map((feature, index) => (
          <div key={index} className={styles.frontariumCard}>
            {feature.title}
            <div className={styles.tooltip}>{feature.description}</div>
          </div>
        ))}
      </div>
    </Box>
  );
};
