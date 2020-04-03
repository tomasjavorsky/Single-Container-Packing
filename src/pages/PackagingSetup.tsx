import React from "react";
import { MainContainer } from "../components/MainContainer/styled";
import {
  PackagingContainer,
  Title,
  FormsWrapper,
  FormWrapper,
  FormTitle,
  StyledForm,
  InputFieldWrapper,
  PackButton
} from "../components/PackagingSetup/styled";
import texts from "../texts";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import ReduxTypes from "../store/@types";
import { sendPackage } from "../store/packaging/actions";

interface DispatchProps {
  sendPackage: typeof sendPackage
}

interface StateProps {

}

interface Props extends StateProps, DispatchProps {

}

const PackagingSetup = ({sendPackage}: Props) => {
  const containerFormik = useFormik({
    initialValues: {
      containerId: "1",
      Wdt: "20",
      Hgt: "20",
      Dpt: "20",
      MaxWgt: "50"
    },
    validationSchema: Yup.object({
      containerId: Yup.number().required(),
      Wdt: Yup.number().required(),
      Hgt: Yup.number().required(),
      Dpt: Yup.number().required(),
      MaxWgt: Yup.number().required()
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  const itemFormik = useFormik({
    initialValues: {
      itemId: "2",
      Wdt: "5",
      Hgt: "5",
      Dpt: "5",
      Wgt: "5",
      Qty: "2",
      vr: false
    },
    validationSchema: Yup.object({
      itemId: Yup.number().required(),
      Wdt: Yup.number().required(),
      Hgt: Yup.number().required(),
      Dpt: Yup.number().required(),
      Wgt: Yup.number().required(),
      Qty: Yup.number().required(),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <MainContainer>
      <PackagingContainer>
        <Title>{texts.mainTitle}</Title>
        <FormsWrapper>
          <FormWrapper>
            <FormTitle>{texts.containerFormTitle}</FormTitle>
            <StyledForm onSubmit={containerFormik.handleSubmit}>
              <InputFieldWrapper>
                <TextField
                  id="containerId"
                  name="containerId"
                  error={
                    containerFormik.touched.containerId &&
                    containerFormik.errors.containerId
                      ? true
                      : false
                  }
                  type="text"
                  onChange={containerFormik.handleChange}
                  onBlur={containerFormik.handleBlur}
                  value={containerFormik.values.containerId}
                  label={texts.containerForm.Id}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Wdt"
                  name="Wdt"
                  error={
                    containerFormik.touched.Wdt && containerFormik.errors.Wdt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={containerFormik.handleChange}
                  onBlur={containerFormik.handleBlur}
                  value={containerFormik.values.Wdt}
                  label={texts.containerForm.Wdt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Hgt"
                  name="Hgt"
                  error={
                    containerFormik.touched.Hgt && containerFormik.errors.Hgt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={containerFormik.handleChange}
                  onBlur={containerFormik.handleBlur}
                  value={containerFormik.values.Hgt}
                  label={texts.containerForm.Hgt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Dpt"
                  name="Dpt"
                  error={
                    containerFormik.touched.Dpt && containerFormik.errors.Dpt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={containerFormik.handleChange}
                  onBlur={containerFormik.handleBlur}
                  value={containerFormik.values.Dpt}
                  label={texts.containerForm.Dpt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="MaxWgt"
                  name="MaxWgt"
                  error={
                    containerFormik.touched.MaxWgt &&
                    containerFormik.errors.MaxWgt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={containerFormik.handleChange}
                  onBlur={containerFormik.handleBlur}
                  value={containerFormik.values.MaxWgt}
                  label={texts.containerForm.MaxWgt}
                  variant="outlined"
                />
              </InputFieldWrapper>
            </StyledForm>
          </FormWrapper>
          <FormWrapper>
            <FormTitle>{texts.itemsFormTitle}</FormTitle>
            <StyledForm onSubmit={itemFormik.handleSubmit}>
              <InputFieldWrapper>
                <TextField
                  id="itemId"
                  name="itemId"
                  error={
                    itemFormik.touched.itemId && itemFormik.errors.itemId
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.itemId}
                  label={texts.containerForm.Id}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Wdt"
                  name="Wdt"
                  error={
                    itemFormik.touched.Wdt && itemFormik.errors.Wdt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.Wdt}
                  label={texts.containerForm.Wdt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Hgt"
                  name="Hgt"
                  error={
                    itemFormik.touched.Hgt && itemFormik.errors.Hgt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.Hgt}
                  label={texts.containerForm.Hgt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Dpt"
                  name="Dpt"
                  error={
                    itemFormik.touched.Dpt && itemFormik.errors.Dpt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.Dpt}
                  label={texts.containerForm.Dpt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Wgt"
                  name="Wgt"
                  error={
                    itemFormik.touched.Wgt && itemFormik.errors.Wgt
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.Wgt}
                  label={texts.containerForm.Wgt}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <InputFieldWrapper>
                <TextField
                  id="Qty"
                  name="Qty"
                  error={
                    itemFormik.touched.Qty && itemFormik.errors.Qty
                      ? true
                      : false
                  }
                  type="text"
                  onChange={itemFormik.handleChange}
                  onBlur={itemFormik.handleBlur}
                  value={itemFormik.values.Qty}
                  label={texts.containerForm.Qty}
                  variant="outlined"
                />
              </InputFieldWrapper>
              <FormControlLabel
                id="vr"
                name="vr"
                value={itemFormik.values.vr}
                control={<Checkbox color="secondary" />}
                label={texts.containerForm.Vr}
                onChange={itemFormik.handleChange}
                labelPlacement="top"
              />
            </StyledForm>
          </FormWrapper>
        </FormsWrapper>
        <PackButton
          onClick={() => {
            console.log(containerFormik.values);
            console.log(itemFormik.values);
            sendPackage(containerFormik.values,itemFormik.values)
          }}
        >
          {texts.pack}
        </PackButton>
      </PackagingContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state: ReduxTypes) => {
  return {
    
  };
};

export default connect(mapStateToProps, {sendPackage})(PackagingSetup);
