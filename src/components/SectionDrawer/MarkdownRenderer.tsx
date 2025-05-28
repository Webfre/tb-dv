import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography, Box } from "@mui/material";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <Typography
            variant="h4"
            sx={{ fontSize: "28px", fontWeight: 600 }}
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <Typography
            variant="h5"
            sx={{ fontSize: "24px", fontWeight: 600, mt: 2 }}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", fontWeight: 500, mt: 2 }}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <Typography variant="body1" sx={{ mb: 1.5 }} {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul
            style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
              listStyleType: "disc",
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <li>
            <Typography
              sx={{ fontSize: "16px" }}
              variant="subtitle2"
              component="span"
              {...props}
            />
          </li>
        ),
        table: ({ node, ...props }) => (
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              marginBottom: "1.5rem",
              marginTop: "10px",
              border: "1px solid #ccc",
            }}
            {...props}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead style={{ backgroundColor: "#f5f5f5" }} {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr style={{ borderBottom: "1px solid #e0e0e0" }} {...props} />
        ),
        th: ({ node, ...props }) => (
          <th
            style={{
              padding: "8px 12px",
              fontWeight: 600,
              fontSize: "15px",
              textAlign: "left",
              backgroundColor: "#f3f0ff",
              color: "#5e4adb",
            }}
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            style={{
              padding: "8px 12px",
              fontSize: "14px",
            }}
            {...props}
          />
        ),
        code: ({ node, inline, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || "");
          if (!inline && match) {
            return (
              <Box
                component="pre"
                sx={{
                  backgroundColor: "#282c34",
                  color: "#f8f8f2",
                  padding: "16px",
                  borderRadius: "10px",
                  overflowX: "auto",
                  fontSize: "14px",
                  mb: 2,
                }}
              >
                <code className={className} {...props}>
                  {children}
                </code>
              </Box>
            );
          }

          return (
            <code
              style={{
                backgroundColor: "rgba(132,110,230,0.1)",
                color: "#846ee6",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
