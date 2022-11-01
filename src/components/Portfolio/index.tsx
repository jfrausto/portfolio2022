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
  budgetTrackTags,
  cryptickTags
} from './ProjectTools';


export const Portfolio: React.FC = () => {

  const description = {
    vibee: "A social media app that analyzes used words in your 'tweet-style' post, and suggests songs that could match your mood. Post your mood, song, and 'vibe' for interesting combinations so the world can see! Uses Genius lyrics API.",
    pubCrawl: "An app that plans a night out for you when you just can't decide! Just choose your city, then a random list of bars and restaurants will be automatically routed. Allows customization of the type of establishments you would like to visit.",
    learningSquad: "A fast paced trivia game. Pick a squad, and take a quiz from 6 different categories. Earn enough 'cash', and you will be able to color your territory on a grid map in the name of your squad! Uses a public 'Jeopardy!' data set.",
    sleepCalc: "A handy sleep cycle calculator. Figure out when you should sleep and wake up. Slightly educational. Scrapes the web for any recent news articles about sleep cycles.",
    budgetTracker: "A simple, useful budget tracking application. Input your withdrawals and deposits to watch your wealth fluctuate with a fluid chart.",
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
              project="Vibee"
              video={"/static/videos/Vibee_TAB_demo.mp4"} 
              prod="https://evening-sands-41595.herokuapp.com/"
              code="https://github.com/jfrausto/FindYourVibe"
              tags={vibeeTags}
              desc={description.vibee}
            />
            <ProjectCard 
              project="Pub Crawl"
              video={"/static/videos/Pub_Crawl_Gen_TAB_demo.mp4"}
              prod="https://willrodgers7.github.io/Ultimate-Pub-Crawl/"
              code="https://github.com/WillRodgers7/Ultimate-Pub-Crawl"
              tags={pubCrawlTags}
              desc={description.pubCrawl}
            />
            <ProjectCard 
              project="Learning Squads"
              video={"/static/videos/Learn_Squad_TAB_demo.mp4"}
              prod="https://learn-squad.herokuapp.com/"
              code="https://github.com/shadysaleh01/Learn-Squad"
              tags={learnSquadTags}
              desc={description.learningSquad}
            />
            <ProjectCard 
              project="Cryptick"
              video={"/static/videos/Cryptick.mp4"}
              prod="https://cryptick.vercel.app/"
              code="https://github.com/jfrausto/cryptick"
              tags={cryptickTags}
              desc={description.cryptick}
            />
            <ProjectCard 
              project="Sleep Cycle Calculator"
              video={"/static/videos/SCC_DEMO.webm"}
              prod="https://sleep-cycle-calculator.vercel.app/"
              code="https://github.com/jfrausto/sleep-calculator"
              tags={sleepCalcTags}
              desc={description.sleepCalc}
            />
            <ProjectCard 
              project="Budget Tracker"
              video={"/static/videos/Budeget_Tracker_TAB_demo.mp4"}
              prod="https://rocky-garden-31416.herokuapp.com/"
              code="https://github.com/jfrausto/Budget-Tracker"
              tags={budgetTrackTags}
              desc={description.budgetTracker}
            />
        </Flex>
      </Container>
  </>
  )
}

