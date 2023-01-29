import { library } from '@fortawesome/fontawesome-svg-core';

// import * as far from '@fortawesome/free-regular-svg-icons';
// import * as fas from '@fortawesome/free-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';

library.add(fab.faDiscord, fab.faGithub);


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

