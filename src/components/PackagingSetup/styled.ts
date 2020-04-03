import styled from "styled-components";

export const PackagingContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  margin: 24px 24px 48px 24px;
  background-color: #f5f5f6;
  border-radius: 3px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow};

`;

export const Title = styled.h1`
  width: calc(100% - 48px);
  padding: 24px;
  margin: 0;
  font-size: 40px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
`;

export const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.layout.md}px) {
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.layout.md}px) {
    width: 50%;
  }
`;

export const FormTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: 300;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  max-width: calc(100% - 48px);
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
`;

export const InputFieldWrapper = styled.div`
  flex: 1;
  margin-right: 8px;
`;

export const PackButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 18px;
`;
