import React, { FC } from "react";
import { Container } from "../App/App.styled";
import SectionStyled from "./Section.styled";
import { Node } from "typescript";

interface SectionProps {
  title: string;
  children: Node;
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
