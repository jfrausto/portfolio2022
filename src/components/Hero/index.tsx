import React from 'react';
import { Container } from '../Container';
import { HeroLeftSide } from './HeroLeftSide';
import { HeroRightSide } from './HeroRightSide';
import { HeroText } from './HeroText';
// import JISO from '../../../public/static/images/J_isometric.PNG';

export const Hero:React.FC = () => {
  return (
    <>
      <Container id="hero"
        // bg="red.100"
        direction={"row"}
        justifyContent={"flex-start"}
        // minWidth={"100vw"}
        backgroundImage="url('/static/images/J_isometric_6.PNG')"
        backgroundPosition={"66%"}
        backgroundSize={"contain"}
        backgroundRepeat={"no-repeat"}
      >
        {/* zindex 2 */}
        {/* <HeroLeftSide /> */}
        {/* zindex 2 */}
        {/* <HeroRightSide /> */}
        {/* zindex 3 */}
        <HeroText />
      </Container>
    </>
  )
};
