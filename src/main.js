// https://emojipedia.org/symbols/

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// LINK: 🔗 DEV Themes  https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/Predefined_Themes/
import 'devextreme/dist/css/dx.carmine.css';

// LINK: 🔗 DEV Global Config  https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/globalConfig/
import config from "devextreme/core/config";

config({
    defaultCurrency: 'EUR'
});

const app = createApp(App);

app.use(router);

app.mount("#app");
