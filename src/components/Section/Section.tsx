import React, { FC } from "react";
import { Container } from "../App/App.styled";
import SectionStyled from "./Section.styled";

interface SectionProps {
  title?: string;
  children: any;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionStyled className={`section`}>
      <Container className="container">
        <>
          {title && <h3 className={`section__title`}>{title}</h3>}
          {children}
        </>
      </Container>
    </SectionStyled>
  );
};

export default Section;
