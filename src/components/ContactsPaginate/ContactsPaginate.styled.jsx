import styled from "styled-components";
export const ContactsPaginateStyled = styled.div`
  padding: 20px;
  .contactsPaginate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & > li {
      list-style: none;
      &.selected {
        color: #805ad5;
      }
      &.disabled {
        opacity: 0;
      }
    }
  }
`;
