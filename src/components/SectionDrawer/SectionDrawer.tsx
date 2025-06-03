import React, { useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Grid,
  Dialog,
  DialogContent,
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
import MarkdownRenderer from "./MarkdownRenderer";
import { chip_sx, chip_sx_light } from "../../styles/global";

interface SectionDrawerProps {
  section: CourseSection | null;
  onClose: () => void;
}

const SectionDrawer: React.FC<SectionDrawerProps> = ({ section, onClose }) => {
  const [htmlDrawerOpen, setHtmlDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const [fullCode, setFullCode] = useState<null | {
    title: string;
    code: string;
    language: string;
  }>(null);

  const handleOpen = (title: string, code: string, language: string) => {
    setFullCode({ title, code, language });
  };

  const handleClose = () => setFullCode(null);

  const visibleCodeBlocks = [
    section?.codeExample && {
      title: "HTML",
      code: section.codeExample,
      language: "html",
    },
    section?.codeExampleCSS && {
      title: "CSS",
      code: section.codeExampleCSS,
      language: "css",
    },
    section?.codeExampleJS && {
      title: "JavaScript",
      code: section.codeExampleJS,
      language: "javascript",
    },
  ].filter(Boolean) as { title: string; code: string; language: string }[];

  const getGridSize = (index: number, count: number): 12 | 6 => {
    if (count === 1) return 12;
    if (count === 2) return 6;
    if (count === 3) return index < 2 ? 6 : 12;
    return 12;
  };

  return (
    <>
      <Drawer
        anchor="top"
        open={!!section}
        onClose={onClose}
        PaperProps={{ sx: { height: "100vh" } }}
      >
        {section && (
          <Box px={4} py={2} sx={{ height: "100%", overflowY: "auto" }}>
            <Box className={styles.titleName}>
              <Box className={styles.titleNameShow}>
                <Typography variant="h6">{section?.title}</Typography>

                <Box display="flex" gap={2}>
                  {section?.show && (
                    <Box display="flex" gap={2}>
                      <Stack direction="row">
                        <Chip
                          label="Показать пример"
                          color="primary"
                          sx={chip_sx}
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
                          clickable
                          label="Отправить на проверку"
                          color="success"
                          sx={chip_sx_light}
                          onClick={() =>
                            navigate(`/panel/mentorlist/${section?.postMentor}`)
                          }
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
              <MarkdownRenderer
                content={
                  section?.content || "Раздел пока не содержит описания."
                }
              />
            </Box>

            {visibleCodeBlocks.length > 0 && (
              <Box mb={6}>
                <Grid container spacing={2} className={styles.gridContainer}>
                  {visibleCodeBlocks.map((block, index) => (
                    <Grid
                      key={block.title}
                      item
                      xs={12}
                      md={getGridSize(index, visibleCodeBlocks.length)}
                      className={styles.gridItem}
                      sx={{
                        mt:
                          visibleCodeBlocks.length === 3 && index === 2
                            ? 2.5
                            : 0,
                      }}
                    >
                      <Typography
                        onClick={() =>
                          handleOpen(block.title, block.code, block.language)
                        }
                        className={styles.gridTitle}
                      >
                        {block.title} решение:{" "}
                        <FullscreenIcon fontSize="small" />
                      </Typography>
                      <CopyBlock
                        text={block.code}
                        language={block.language}
                        showLineNumbers
                        theme={dracula}
                        customStyle={styleCodeBlock}
                        codeBlock
                      />
                    </Grid>
                  ))}
                </Grid>
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
                      sx={chip_sx}
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
                      sx={chip_sx}
                      download
                      clickable
                      color="default"
                    />
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Box>
        )}
      </Drawer>

      <HtmlDrawer
        html={htmlDrawerOpen ? section?.show || null : null}
        onClose={() => setHtmlDrawerOpen(false)}
      />

      <Dialog open={!!fullCode} onClose={handleClose} fullScreen>
        <DialogContent
          sx={{
            backgroundColor: "#282c34",
            padding: 4,
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" color="white" gutterBottom>
            {fullCode?.title}
          </Typography>

          {fullCode && (
            <CopyBlock
              text={fullCode.code}
              language={fullCode.language}
              showLineNumbers
              theme={dracula}
              customStyle={{
                ...styleCodeBlock,
                maxHeight: "85vh",
                overflow: "auto",

                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "#444 transparent", // Firefox

                /* WebKit (Chrome, Edge, Safari) */
                WebkitScrollbarWidth: "thin", // не обязателен, но для совместимости
                WebkitOverflowScrolling: "touch",
              }}
              codeBlock
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SectionDrawer;
