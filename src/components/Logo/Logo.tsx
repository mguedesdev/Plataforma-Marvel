import { LogoContainer, LinkLogo } from './LogoStyles';

interface LogoProps {
  fontSize?: string;
  animate?: boolean;
}

function Logo({ fontSize = '60px', animate }: LogoProps) {
  return (
    <LinkLogo to="/">
      <LogoContainer fontSize={fontSize} animate={animate}> MARVEL </LogoContainer>
    </LinkLogo>
  )
}

export default Logo