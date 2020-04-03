import styled from "styled-components";

export const PackagingContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 24px;
  background-color: #f5f5f6;
  border-radius: 3px;
  box-shadow: 0 0 10px #424242;
`;

export const Title = styled.h1`
  width: calc(100% - 48px);
  padding: 24px;
  margin: 0;
  font-size: 40px;
  font-weight: 300;
  background-color: #ffa726;
`;

export const FormsWrapper = styled.div`
	display: flex;
	flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.layout.md}px) {
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
	width: 100%;
	padding: 24px;
  @media screen and (min-width: ${({ theme }) => theme.layout.md}px) {
    width: 50%;
  }
`;

export const FormTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 30px;
	font-weight: 300;
	border-bottom: 2px solid #ffcc80;
`;
