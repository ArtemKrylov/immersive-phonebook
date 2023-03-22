import styled from 'styled-components';

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 320px;

  ${props => props.theme.media.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${props => props.theme.media.desktop} {
    width: 1024px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.boxDark};
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.fontAccent};

  transition: box-shadow ${({ theme }) => theme.cubic},
    transform ${({ theme }) => theme.cubic};

  &:hover,
  &:focus,
  &:active {
    transform: translate(1px, 1px);
    box-shadow: ${({ theme }) => theme.shadows.boxAccent};
  }

  &:active {
    transform: translate(2px, 2px);
  }

  ${props => props.theme.media.tablet} {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 7px;

  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};

  transition: box-shadow ${({ theme }) => theme.cubic};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.boxDarkHover};
  }
`;
