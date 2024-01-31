import { LogoContainer } from './LogoStyles';

interface LogoProps {
  fontSize?: string;
  animate?: boolean;
}

function Logo({ fontSize = '60px', animate }: LogoProps) {
  return (
    <LogoContainer fontSize={fontSize} animate={animate}>MARVEL</LogoContainer>
  )
}

export default Logo