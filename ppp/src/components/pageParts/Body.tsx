"use client";
import * as React from "react";
import { alpha, Box, Container, Stack } from "@mui/material";
import Title from "../bodyParts/Title";
import Btn from "../bodyParts/Btn";
import BodyContainer from "../bodyParts/Container";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../ui/Google-Gemini-effect";  

const Body: React.FC = () => {
  const [step, setStep] = React.useState<number>(0);
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const handleButtonClick = () => {
    if (step === 0) {
      setUploadedImage(null);
      localStorage.removeItem("selectedImage");
    }
    setStep((prevStep) => (prevStep + 1) % 3); // Reset to 0 after the third step
  };

  const getButtonLabel = () => {
    switch (step) {
      case 0:
        return "Start Now";
      case 1:
        return "See the Result";
      case 2:
        return "retry";
      default:
        return "Start Now";
    }
  };

  const handleImageUpload = (imageData: string) => {
    setUploadedImage(imageData);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: -1,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </Box>
      
      <Box
        id="Body"
        sx={(theme) => ({
          position: 'relative',
          zIndex: 2,
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 30,
          }}
        >
          <Stack spacing={6} useFlexGap sx={{ width: "100%"}}>
            <Title />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <Btn text={getButtonLabel()} onClick={handleButtonClick} />
            </Stack>
          </Stack>
          <br/>
          <br/>
          <br/>
          <BodyContainer text={getButtonLabel()} onUpload={handleImageUpload} clearImage={step === 0}/>
        </Container>
      </Box>
    </div>
  );
};

export default Body;
