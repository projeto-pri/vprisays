import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVolumeUp, faChevronDown, faChevronUp, faChevronLeft, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown)
library.add(faChevronUp)
library.add(faChevronLeft)
library.add(faVolumeUp)
library.add(faKeyboard)

Vue.component('v-icon', FontAwesomeIcon);
