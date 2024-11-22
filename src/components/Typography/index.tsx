import { Typography , TypographyProps } from '@mui/material';

interface ITextProps extends TypographyProps {
  children?: React.ReactNode;
  props: any;
}

const TypographyComponent: React.FC<ITextProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
}

export default TypographyComponent;