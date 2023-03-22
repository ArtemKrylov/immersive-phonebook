import styled from 'styled-components';

interface SectionStyledProps {}

const SectionStyled = styled.section<SectionStyledProps>`
  padding-top: 15px;
  padding-bottom: 15px;

  & .section__title {
    margin-bottom: 5px;

    text-align: center;
    font-weight: 900;
  }

  ${props => props.theme.media.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ${props => props.theme.media.desktop} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export default SectionStyled;
