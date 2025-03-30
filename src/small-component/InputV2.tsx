import React from "react";
import { TextField, InputAdornment, IconButton, TextFieldProps } from "@mui/material";
import { styled } from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type CustomInputProps = TextFieldProps & {
  variantType?: "filled" | "outlined";
};

const CustomInput = styled(TextField)<{ $variantType?: "filled" | "outlined" }>`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    border: ${({ $variantType }) => ($variantType === "outlined" ? "1px solid white" : "none")};
    background: ${({ $variantType }) => ($variantType === "filled" ? "white" : "transparent")};

    &:hover fieldset {
      border-color: transparent;
    }

    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }

  & .MuiInputBase-input {
    color: ${({ $variantType }) => ($variantType === "filled" ? "black" : "white")};
    &::placeholder {
      color: ${({ $variantType }) => ($variantType === "filled" ? "#999" : "rgba(255, 255, 255, 0.6)")};
    }
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0px;
  }

  & svg {
    color: black;
  }
`;

const InputComponent: React.FC<CustomInputProps> = ({ variantType = "filled", ...props }) => {
  return (
    <CustomInput
      {...props}
      $variantType={variantType}
      fullWidth
      placeholder="Enter your email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <ArrowForwardIcon style={{ color: variantType === "filled" ? "black" : "white" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputComponent;
