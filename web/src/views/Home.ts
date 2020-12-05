import { Component, Vue } from "vue-property-decorator";
import Raadsel1 from "@/components/Raadsels/Raadsel1/Raadsel1.vue";
import Raadsel2 from "@/components/Raadsels/Raadsel2/Raadsel2.vue";

@Component({
  components: {
      Raadsel1,
      Raadsel2
  },
})
export default class Home extends Vue {
    
    currentRaadselIndex = 1
    raadsels: { [id: number] : number; } = {
        1: 0,
        2: 0
    }
    successAudio = new Audio(require('../audio/yes.mp3'))
    wrongAudio = new Audio(require('../audio/no.mp3'))
    cadeauAudio = new Audio(require('../audio/cadeautje.wav'))
    victoryAudio = new Audio(require('../audio/victory.wav'))

    click(){        
        this.raadsels[this.currentRaadselIndex]++
        this.allRaadselsCorrect()
    }

    raadselCorrect(raadselId: number, answer: string){
        this.successAudio.play()
        this.currentRaadselIndex = raadselId + 1
        if(this.currentRaadselIndex > Object.keys(this.raadsels).length) {
            this.allRaadselsCorrect()
        }
    }
    
    raadselWrong(raadselId: number, answer: string){
        this.wrongAudio.play()
    }


     allRaadselsCorrect(){
        this.victoryAudio.play()

        new Promise((res) => setTimeout(res, 4000)).then(() => {
            this.cadeauAudio.play()
        })
    }
}