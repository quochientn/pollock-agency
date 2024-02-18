import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";

const questions = [
  {
    question: "How long does it take to build a website?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page mega site than a smaller eight page brochure website.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page mega site than a smaller eight page brochure website.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page mega site than a smaller eight page brochure website.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page mega site than a smaller eight page brochure website.",
  },
];

function FAQ() {
  const [expanded, setExpanded] = useState("question1");

  const handleChange = function (panel) {
    return function (e, isExpanded) {
      console.log(isExpanded);
      setExpanded(isExpanded ? panel : "");
    };
  };

  return (
    <Container maxWidth="lg" component="section" sx={{ py: "6rem" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={6}
        textAlign="center"
      >
        <Typography
          variant="display2"
          color="pollockText.heading"
          component="h2"
          mb={4}
        >
          Creating an online web presence to fit your business
        </Typography>

        <Box>
          {questions.map((question, i) => (
            <Accordion
              expanded={expanded === `question${i + 1}`}
              onChange={handleChange(`question${i + 1}`)}
              key={question.question}
              elevation={0}
              sx={{ mb: "2rem" }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography
                  sx={{
                    typography: {
                      sm: "headline2",
                      xs: "headline3",
                    },
                  }}
                >
                  {question.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="paragraph1">{question.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Typography variant="paragraph1" color="pollockText.text" paragraph>
          If you have technical questions, chat live with developers in the
          official{" "}
          <Link
            underline="hover"
            href="#"
            sx={{ color: "var(--color-action-blue)", cursor: "pointer" }}
          >
            Pollock Discord Server
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default FAQ;
