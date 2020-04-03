import React from "react";
import { MainContainer } from "../components/MainContainer/styled";
import {
  PackagingContainer,
  Title,
  FormsWrapper,
  FormWrapper,
  FormTitle
} from "../components/PackagingSetup/styled";
import texts from "../texts";

const PackagingSetup = () => {
  return (
    <MainContainer>
      <PackagingContainer>
        <Title>{texts.mainTitle}</Title>
        <FormsWrapper>
          <FormWrapper>
            <FormTitle>{texts.containerFormTitle}</FormTitle>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>{texts.itemsFormTitle}</FormTitle>
          </FormWrapper>
        </FormsWrapper>
      </PackagingContainer>
    </MainContainer>
  );
};

export default PackagingSetup;
