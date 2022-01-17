import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

// Will work fine
const InputTel = (props) => (
  <InputMask
    mask="(99) 99999-9999"
    value={props.value}
    onChange={props.onChange}
  >
    {(inputProps) => (
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        sx={{ width: "500px" }}
        margin="normal"
        color="warning"
        
      />
    )}
  </InputMask>
);

export default InputTel;
