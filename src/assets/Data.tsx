import { HourglassBottom, HouseSharp, WbSunny, MonitorHeart, CoffeeIcon } from '@mui/icons-material'
import { PromptData } from '../main'

/**
 * Todo: Add credits, option for LinkedIn/GitHub/Socials links to contributor
 * 
 */


const data: PromptData[] = [{
  prompt: [<WbSunny />, "day"],
  answer: "sunny day",
  socials: {
    LIurl: 'https://www.linkedin.com/in/conwaycj/',
    GHurl: 'https://github.com/ConwayCJ',
  }
}, {
  prompt: ["Out", "of", <HourglassBottom />],
  answer: "out of time"
}, {
  prompt: [<HouseSharp />, "party"],
  answer: "house party"
}, {
  prompt: ["Queen", "of", <MonitorHeart />, "'s"],
  answer: 'queen of hearts'
},
{
  prompt: [ <CoffeeIcon />, "is", "life"],
  answer: 'coffee is life'
}

]

export default data