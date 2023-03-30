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
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        border: 0;
        clip: rect(0 0 0 0);
      }
    }
  }
`;
