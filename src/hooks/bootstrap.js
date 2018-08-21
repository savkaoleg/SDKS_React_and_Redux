import {setSdks} from '../store/sdks/actions'
import sdks from '../sdks.json'

export default function bootstrap ({ dispatch }) {
  return () => {
     dispatch(setSdks(sdks.results))
  }
}
