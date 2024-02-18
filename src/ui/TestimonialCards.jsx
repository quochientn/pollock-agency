import { Box } from "@mui/material";

import TestimonialCard from "./TestimonialCard";

const testimonialsContent = [
  {
    image: "/avatar-1.jpg",
    name: "Monica Smith",
    job: "Web Designer",
    comment:
      "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
  },
  {
    image: "/avatar-2.jpg",
    name: "Vincente Smith",
    job: "Web Designer",
    comment:
      "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
  },
  {
    image: "/avatar-3.jpg",
    name: "Stella Smith",
    job: "Web Designer",
    comment:
      "Overall experience is awesome!! I'm a visual thinker, and I couldn't function without a tool like this.",
  },
];

function TestimonialCards() {
  return (
    <Box display="flex" flexDirection={{ md: "row", xs: "column" }} gap={4}>
      {testimonialsContent.map((testimonial) => (
        <TestimonialCard
          src={testimonial.image}
          name={testimonial.name}
          job={testimonial.job}
          comment={testimonial.comment}
          key={testimonial.name}
        />
      ))}
    </Box>
  );
}

export default TestimonialCards;
