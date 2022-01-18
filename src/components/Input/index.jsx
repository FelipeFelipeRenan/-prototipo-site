import InputMask from "react-input-mask";

import { makeStyles, TextField } from "@material-ui/core";

/*const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
    "& .MuiOutlinedInput-input": {
      color: "green",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple",
    },
    "& .MuiInputLabel-outlined": {
      color: "green",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "red",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "purple",
    },
  },
});*/

export const useStyles = makeStyles({
  root: {
    "& 	.MuiFilledInput-root": {
      color: "#f0f8ff",
      textColor: "white",
    },
    "& 	.MuiFilledInput-input": {
      color: "#f0f8ff",
    },
    "& 	.MuiFilledInput-adornedStart": {
      color: "#f0f8ff",
    },
  },
});

// Will work fine
export const InputTel = (props) => {
  const classes = useStyles();
  return (
    <InputMask
      mask="(99) 99999-9999"
      value={props.value}
      onChange={props.onChange}
    >
      {(inputProps) => (
        <TextField
          className={classes.root}
          fullWidth
          id="filled-basic"
          label="Telefone"
          variant="filled"
          margin="normal"
        />
      )}
    </InputMask>
  );
};
