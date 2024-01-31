import { LogoContainer } from './LogoStyles';

interface LogoProps {
  fontSize?: string;
}

function Logo({ fontSize = '60px' }: LogoProps) {
  return (
    <div>
      <LogoContainer fontSize={fontSize}>MARVEL</LogoContainer>
    </div>
  )
}

export default Logo