
import { Prop, Vue, Watch } from "vue-property-decorator";

export default abstract class Raadsel extends Vue {
    abstract raadselId: number
    abstract antwoord: string;

    @Prop()
    trigger = 0

    textField : string = ""

    @Watch("trigger")
    triggerCheck(){
        if(this.check(this.textField))
        {
            this.guessCorrect(this.textField)
            this.$emit('guessCorrect', this.raadselId, this.textField)
        } else {
            this.guessWrong(this.textField)
            this.$emit('guessWrong', this.raadselId, this.textField)
        }
    }

    abstract check(answer: string) : boolean

    abstract guessCorrect(answer: string) : void
    abstract guessWrong(answer: string) : void
}