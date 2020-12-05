
import { Vue, Component } from "vue-property-decorator";
import Raadsel from '../Raadsel';

@Component
export default class Raadsel2 extends Raadsel {
    raadselId: number = 2
    wrong = false

    antwoord: string = "Pr0nXxx";
    raadsel: string= "Wat is de geheime code?"

    check(answer: string): boolean {
        return answer === this.antwoord
    }

    
    guessCorrect(answer: string): void {
    }

    guessWrong(answer: string): void {
        this.wrong = true
    }
}