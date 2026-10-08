import './styles/index.css'
import { CountdownApp } from './countdown-app/countdown-app'
import { ConundrumBoard } from './conundrum-board/conundrum-board'
import { LetterBoard } from './letter-board/letter-board'
import { ModalLetterSolution } from './modal/modal-letter-solution'
import { ModalNewGame } from './modal/modal-new-game'
import { ModalNumberSolution } from './modal/modal-number-solution'
import { ModalShortcuts } from './modal/modal-shortcuts'
import { ModalWelcome } from './modal/modal-welcome'
import { NumberBoard } from './number-board/number-board'
import './analytics'

customElements.define('countdown-app', CountdownApp);
customElements.define('conundrum-board', ConundrumBoard);
customElements.define('letter-board', LetterBoard);
customElements.define('modal-letter-solution', ModalLetterSolution);
customElements.define('modal-new-game', ModalNewGame);
customElements.define('modal-number-solution', ModalNumberSolution);
customElements.define('modal-shortcuts', ModalShortcuts);
customElements.define('modal-welcome', ModalWelcome);
customElements.define('number-board', NumberBoard);