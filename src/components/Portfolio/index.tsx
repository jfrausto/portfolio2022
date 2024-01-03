import React from 'react';
import {
  Flex,
  Heading,
} from '@chakra-ui/react';
import { Container } from '../Container';
import { ProjectCard } from './ProjectCard';
import { 
  vibeeTags, 
  pubCrawlTags, 
  learnSquadTags, 
  sleepCalcTags, 
  caveCafeTags,
  cryptickTags
} from './ProjectTools';


export const Portfolio: React.FC = () => {

  const description = {
    vibee: "A social media app that analyzes used words in your 'tweet-style' post, and suggests songs that could match your mood. Post your mood, song, and 'vibe' for interesting combinations so the world can see! Uses Genius lyrics API.",
    pubCrawl: "An app that plans a night out for you when you just can't decide! Just choose your city, then a random list of bars and restaurants will be automatically routed. Allows customization of the type of establishments you would like to visit.",
    learningSquad: "A fast paced trivia game. Pick a squad, and take a quiz from 6 different categories. Earn enough 'cash', and you will be able to color your territory on a grid map in the name of your squad! Uses a public 'Jeopardy!' data set.",
    sleepCalc: "A handy sleep cycle calculator. Figure out when you should sleep and wake up. Slightly educational. Scrapes the web for any recent news articles about sleep cycles.",
    caveCafe: "Warren High School's Cave Cafe coffee ordering web application. Staff at WHS use this app to order cafe style drinks to support our Special Education program.",
    cryptick: "A minimalistic price ticker for crypto currencies. Quickly check current and recent info of your favorite cryptos with a clean and simple interface. Uses the Coinbase API."
  };

  return (
    <>
      <Container
        id="work"
        pt={"9vh"}
        pb={10}
      >
        <Heading
          size="4xl"
          marginBottom="3rem" 
        >
          Projects
        </Heading>
        <Flex
          maxW="1600px"
          alignItems="center"
          justifyContent="center"
          wrap={"wrap"}
        >
            <ProjectCard 
              project="Cryptick"
              video={"/static/images/CRYPTICK_SCREENSHOT.PNG"}
              prod="https://cryptick.vercel.app/"
              code="https://github.com/jfrausto/cryptick"
              tags={cryptickTags}
              desc={description.cryptick}
            />
            <ProjectCard 
              project="Pub Crawl"
              video={"/static/images/PUB_CRAWL_SCREENSHOT.PNG"}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
              desc={description.pubCrawl}
            />
              <ProjectCard 
                project="Sleep Cycle Calculator"
                video={"/static/images/SCC_SCREENSHOT.PNG"}
                prod="https://sleep-cycle-calculator.vercel.app/"
                code="https://github.com/jfrausto/sleep-calculator"
                tags={sleepCalcTags}
                desc={description.sleepCalc}
              />
            <ProjectCard 
              project="Learning Squads"
              video={"/static/images/LEARN_SQUAD_SCREENSHOT.PNG"}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
              desc={description.learningSquad}
            />
            <ProjectCard 
              project="Vibee"
              video={"/static/images/VIBEE_SCREENSHOT.PNG"} 
              prod="https://evening-sands-41595.herokuapp.com/"
              code="https://github.com/jfrausto/FindYourVibe"
              tags={vibeeTags}
              desc={description.vibee}
            />
            <ProjectCard 
              project="WHS Cave Cafe Order App"
              video={"/static/images/Cave_Cafe_Screenshot.PNG"}
              prod="https://cavecafe.vercel.app/"
              code="https://github.com/jfrausto/portfolio2022"
              tags={caveCafeTags}
              desc={description.caveCafe}
            />
        </Flex>
      </Container>
  </>
  )
}

