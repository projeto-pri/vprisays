export default class SpeechService {

  constructor(lang='pt-BR', rate=1.0, pitch=1.0) {
    this.synth = this.initService();
    this.lang = lang;
    this.rate = rate;
    this.pitch = pitch;
  }

  initService() {
    if (!("speechSynthesis" in window)) {
      this.aletIncompatible();
    } else {
      return window.speechSynthesis;
    }
  }

  async speak(msg) {
    if (!this.synth) {
      this.aletIncompatible();
      return
    }
    if (!this.synth.getVoices().length) {
      this.alertNoVoices();
      return
    }

    const { lang, rate, pitch } = this;

    const _msg = Object.assign(new SpeechSynthesisUtterance(msg), {
      lang,
      rate,
      pitch,
      voiceURI: 'native'
    });

    this.synth.speak(_msg);
  }

  async aletIncompatible() {
    console.warn("This browser is not supported!");
    alert("Este navegador não é suportado! Recomendo o Google Chrome.");
  }

  async alertNoVoices() {
    console.warn("No voices in this browser!");
    alert("Este navegador não contém o pacote de idiomas! Recomendo o Google Chrome.");
  }
}
