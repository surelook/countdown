import Clock from './videos/countdown-clock.mp4'
import './styles/index.scss'
import { CountdownApp } from './countdown-app/countdown-app'
import { ConundrumBoard } from './conundrum-board/conundrum-board'
import { LetterBoard } from './letter-board/letter-board'
import { NumberBoard } from './number-board/number-board'
import './analytics'

customElements.define('countdown-app', CountdownApp);
customElements.define('conundrum-board', ConundrumBoard);
customElements.define('letter-board', LetterBoard);
customElements.define('number-board', NumberBoard);