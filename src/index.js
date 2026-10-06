import './styles/index.css'
import { CountdownApp } from './countdown-app/countdown-app'
import { ConundrumBoard } from './conundrum-board/conundrum-board'
import { LetterBoard } from './letter-board/letter-board'
import { ModalNewGame } from './modal/modal-new-game'
import { ModalNumberSolution } from './modal/modal-number-solution'
import { ModalWelcome } from './modal/modal-welcome'
import { NumberBoard } from './number-board/number-board'
import './analytics'

customElements.define('countdown-app', CountdownApp);
customElements.define('conundrum-board', ConundrumBoard);
customElements.define('letter-board', LetterBoard);
customElements.define('modal-new-game', ModalNewGame);
customElements.define('modal-number-solution', ModalNumberSolution);
customElements.define('modal-welcome', ModalWelcome);
customElements.define('number-board', NumberBoard);