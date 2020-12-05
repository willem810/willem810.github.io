
import { Vue, Component } from "vue-property-decorator";
import Raadsel from '../Raadsel';
import emailjs from 'emailjs-com';

// import * as nodemailer from 'nodemailer';

@Component
export default class Raadsel1 extends Raadsel {

    wrong = false
    raadselId: number = 1

    antwoord: string = "4";
    raadsel: string = "Hoeveel is 2+2?"

    mailRaadsel = "Waar je stinkt en je jezelf ziet staan, daartussenin kun je in de 2e lade verder gaan"
    mailTo = "willemtoemen@live.nl"

    check(answer: string): boolean {
        return answer === this.antwoord
    }


    guessCorrect(answer: string): void {
        this.sendMail()
    }
    guessWrong(answer: string): void {
        this.wrong = true
    }

    sendMail() {
        const serviceId = 'service_he0tjs6'
        const templateId = 'template_6djzt1f'
        const userId = 'user_vWFKUFFLjbM22ywtAbEDF'
        emailjs.send(serviceId, templateId, {
            subject: "Gratis code",
            content: this.mailRaadsel,
            email_to: this.mailTo
        }, userId)
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    }
}