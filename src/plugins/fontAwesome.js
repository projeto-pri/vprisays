import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeUp, faChevronDown, faChevronUp, faChevronLeft, faKeyboard, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faVolumeUp,
  faKeyboard,
  faHome,
  faQuestionCircle,
  faGithub
)

Vue.component('v-icon', FontAwesomeIcon);
