import React from "react";
import styles from "./FrontariumFeatures.module.scss";
import { featuresdata } from "../../DB/INFO/featuresdata";
import { Box, Typography } from "@mui/material";

export const FrontariumFeatures: React.FC = () => {
  return (
    <Box sx={{ paddingTop: "75px" }}>
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
