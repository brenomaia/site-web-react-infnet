import { TextField } from '@mui/material';


const TextFieldComponent = (props) => {
  const { variant = "outlined" } = props;

  return <TextField
            className="text-field"
            variant={variant}
            {...props} />
}

export default TextFieldComponent;