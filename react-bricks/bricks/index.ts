import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import HeroUnit from './HeroUnit'
import Thumbnail from './Thumbnail'
import TextImage from './TextImage'

const bricks: types.Brick<any>[] = [
  HeroUnit, 
  Thumbnail,
  ...website
]

export default bricks
