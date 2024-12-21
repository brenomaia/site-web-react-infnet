import { Typography } from '@mui/material';


const TypographyComponent = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
}

export default TypographyComponent;