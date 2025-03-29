import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { styled } from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    border: ${(props) =>
      props.$variant === "outlined" ? "1px solid white" : "none"};
    background: ${(props) =>
      props.$variant === "filled" ? "white" : "transparent"};

    "&:hover fieldset": {
      borderColor: "transparent",
    },

    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },

  & .MuiInputBase-input {
    color: ${(props) => (props.$variant === "filled" ? "black" : "white")};
    &::placeholder {
      color: ${(props) =>
        props.$variant === "filled" ? "#999" : "rgba(255, 255, 255, 0.6)"};
    }
    &::placeholder {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0px;
        color: ${(props) => (props.$variant === "filled" ? "black" : "white")};
    }
  }

  & svg {
        color: black;
  }
`;

const InputComponent = ({ variant = "filled" }) => {
  return (
    <CustomInput
      fullWidth
      placeholder="Enter your email"
      $variant={variant}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <ArrowForwardIcon
                style={{ color: variant === "filled" ? "black" : "white" }}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputComponent;
