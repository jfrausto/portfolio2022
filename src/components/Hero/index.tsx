import React from 'react';
import { Container } from '../Container';
import { HeroLeftSide } from './HeroLeftSide';
import { HeroRightSide } from './HeroRightSide';
import { HeroText } from './HeroText';

export const Hero:React.FC = () => {
  return (
    <>
      <Container id="hero">
        {/* zindex 2 */}
        <HeroLeftSide />
        {/* zindex 2 */}
        <HeroRightSide />
        {/* zindex 3 */}
        <HeroText />
      </Container>
    </>
  )
};
