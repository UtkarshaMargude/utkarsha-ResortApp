import { useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  InputBaseProps,
} from "@mui/material";
// import { InputBase } from '@mui/material/TextField';
import { useField, useFormikContext } from "formik";
import { Box } from "@mui/system";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(4),
  },
  "&.MuiInputBase-root": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #4d5459",
    fontSize: 16,
    // transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    ".MuiInputBase-input": {
      margin: "5px 12px",
      borderRadius: 4,
      // '&:focus': {
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      //   borderColor: theme.palette.primary.main,
      // },
    },
    ".MuiInputAdornment-root": {
      marginLeft: "12px",
      marginRight: 0,
      paddingRight: "12px",
      borderRight: "1px solid #DDEAF3",
      height: "45px",
      ".MuiCardMedia-root": {
        width: 24,
      },
    },
    "& ::placeholder": {
      textTransform: "none",
    },
    "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "input[type=number]": {
      MozAppearance: "textfield",
    },
  },
}));

export default function MFTextField({
  name,
  label,
  placeholder,
  defaultValue,
  readonly,
  inputProps,
  margin,
  startAdornment,
  onChange,
  sx,
  trimOnBlur = true,
  displayCharecterCounter = "",
  applyMarginBottom = true,
  ...props
}: InputBaseProps & {
  name: string;
  label?: string;
  margin?: "dense" | "none" | undefined;
  placeholder: string;
  defaultValue?: string;
  readonly?: boolean;
  startAdornment?: JSX.Element;
  trimOnBlur?: boolean;
  displayCharecterCounter?: string;
  applyMarginBottom?: boolean;
}): JSX.Element {
  const id = `${name}-input`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(name);
  onChange = onChange || field.onChange;
  const { setFieldValue } = useFormikContext();
  const { setTouched } = helpers;
  const errorText = meta.error && meta.touched ? meta.error : "";
  // eslint-disable-next-line
  const onBlur = (e: React.ChangeEvent<any>): void => {
    const { target: fieldTarget } = e;
    const { value } = fieldTarget;

    setTimeout(() => {
      trimOnBlur &&
        setFieldValue(
          name,
          value && typeof value === "string"
            ? !meta.initialValue && value.trim() === ""
              ? meta.initialValue
              : value.trim()
            : value
        );
      setTouched(true, true);
    }, 0);
  };
  useEffect(() => {
    inputRef.current?.addEventListener("wheel", (e) => e.preventDefault());
  }, []);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{
        mt: { xs: 1, md: 2 },
        mb: applyMarginBottom ? { xs: 1, md: 2 } : 1,
      }}
    >
      {label && (
        <InputLabel
          shrink
          htmlFor={id}
          sx={{
            transform: "unset",
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(0,0,0,0.7)",
          }}
        >
          {label}
        </InputLabel>
      )}
      <BootstrapInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={id}
        startAdornment={startAdornment}
        {...field}
        onBlur={onBlur}
        margin={margin}
        disabled={readonly || false}
        inputProps={inputProps}
        {...props}
        onChange={onChange}
        ref={inputRef}
        sx={{
          ...sx,
          "& .Mui-disabled": {
            cursor: !props.disabled ? "text" : "not-allowed !important",
            pointerEvents: "all",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: errorText ? "row" : "row-reverse",
        }}
      >
        {errorText && (
          <FormHelperText
            error
            sx={{ marginLeft: "unset", fontSize: "1.3rem" }}
          >
            {errorText}
          </FormHelperText>
        )}
        {displayCharecterCounter && (
          <FormHelperText sx={{ marginLeft: "unset" }}>
            {`${field.value.toString().length} / ${displayCharecterCounter}`}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  );
}
