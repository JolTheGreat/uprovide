import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFire} from "@fortawesome/free-solid-svg-icons";


library.add(faUser, faBell, faStar, faHeart, faFire)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
