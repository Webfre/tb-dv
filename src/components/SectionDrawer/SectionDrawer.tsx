import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import { CopyBlock, dracula } from "react-code-blocks";
import { useNavigate } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import HtmlDrawer from "../Сourse/HtmlDrawer";
import styles from "./SectionDrawer.module.scss";
import { CourseSection } from "../../DB/index_type";

interface SectionDrawerProps {
  section: CourseSection | null;
  onClose: () => void;
}

const SectionDrawer: React.FC<SectionDrawerProps> = ({ section, onClose }) => {
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        anchor="top"
        open={!!section}
        onClose={onClose}
        PaperProps={{ sx: { height: "100vh" } }}
      >
        <Box px={4} py={2} sx={{ height: "100%", overflowY: "auto" }}>
          <Box className={styles.titleName}>
            <Box className={styles.titleNameShow}>
              <Typography variant="h6" color="primary">
                {section?.title}
              </Typography>

              <Box display="flex" gap={2}>
                {section?.show && (
                  <Box display="flex" gap={2}>
                    <Stack direction="row">
                      <Chip
                        label="Показать пример"
                        color="primary"
                        onClick={() => setHtmlDrawerOpen(true)}
                        clickable
                      />
                    </Stack>
                  </Box>
                )}
              </Box>

              <Box display="flex" gap={2}>
                {section?.postMentor && (
                  <Box display="flex" gap={2}>
                    <Stack direction="row">
                      <Chip
                        label="Отправить на проверку"
                        color="success"
                        onClick={() =>
                          navigate(`/mentorprofilepage/${section?.postMentor}`)
                        }
                        clickable
                      />
                    </Stack>
                  </Box>
                )}
              </Box>
            </Box>

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box className={styles.content}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {section?.content || "Раздел пока не содержит описания."}
            </ReactMarkdown>
          </Box>

          {section?.codeExample && (
            <Box mb={3}>
              {section.codeExampleCSS ? (
                <Grid container spacing={2} className={styles.gridContainer}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2" gutterBottom>
                      Пример кода: HTML
                    </Typography>
                    <CopyBlock
                      text={section.codeExample}
                      language="html"
                      showLineNumbers
                      theme={dracula}
                      customStyle={styleCodeBlock}
                      codeBlock
                    />
                  </Grid>

                  <Grid item className={styles.gridItem} xs={12} md={6}>
                    <Typography variant="body2" gutterBottom>
                      Пример кода: CSS
                    </Typography>
                    <CopyBlock
                      text={section.codeExampleCSS}
                      language="css"
                      showLineNumbers
                      theme={dracula}
                      customStyle={styleCodeBlock}
                      codeBlock
                    />
                  </Grid>
                </Grid>
              ) : (
                <CopyBlock
                  text={section.codeExample}
                  language={section.type ? "js" : "html"}
                  showLineNumbers
                  theme={dracula}
                  customStyle={styleCodeBlock}
                  codeBlock
                />
              )}
            </Box>
          )}

          {section?.resources?.length ? (
            <Box className={styles.listResources}>
              <Typography variant="subtitle1" gutterBottom>
                Полезные ссылки
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {section.resources.map((url, index) => (
                  <Chip
                    key={index}
                    icon={<LinkIcon />}
                    label={new URL(url).hostname}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener"
                    clickable
                    color="info"
                  />
                ))}
              </Stack>
            </Box>
          ) : null}

          {section?.attachments?.length ? (
            <Box className={styles.listAttachments}>
              <Typography variant="subtitle1" gutterBottom>
                Прикреплённые файлы
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {section.attachments.map((file, index) => (
                  <Chip
                    key={index}
                    icon={<InsertDriveFileIcon />}
                    label={file.split("/").pop()}
                    component="a"
                    href={file}
                    download
                    clickable
                    color="default"
                  />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Drawer>

      <HtmlDrawer
        html={htmlDrawerOpen ? section?.show || null : null}
        onClose={() => setHtmlDrawerOpen(false)}
      />
    </>
  );
};

export default SectionDrawer;
