import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faDiscord, faGithub)


import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
