import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import Divider from 'primevue/divider';
import Carousel from 'primevue/carousel';
import ProgressSpinner from 'primevue/progressspinner';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Chip from 'primevue/chip';
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog'
import Galeria from 'primevue/galleria'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Menubar", Menubar)
    nuxtApp.vueApp.component("Divider", Divider)
    nuxtApp.vueApp.component("Carousel", Carousel)
    nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner)
    nuxtApp.vueApp.component("TabView", TabView)
    nuxtApp.vueApp.component("TabPanel", TabPanel)
    nuxtApp.vueApp.component("Toast", Toast)
    nuxtApp.vueApp.component("Chip", Chip)
    nuxtApp.vueApp.component("InputText", InputText)
    nuxtApp.vueApp.component("Dropdown", Dropdown)
    nuxtApp.vueApp.component("Dialog", Dialog)
    nuxtApp.vueApp.component("Galeria", Galeria)
    nuxtApp.vueApp.directive("tooltip", Tooltip)

    //other components that you need
});