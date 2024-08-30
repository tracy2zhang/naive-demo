import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {
  // create naive ui
  create,
  // component
  NConfigProvider,
  NCheckbox,
  NButton,
} from 'naive-ui'

const Naive = create({
  components: [
    NConfigProvider,
    NCheckbox,
    NButton,
  ]
})
const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
  console.warn(err, vm, info)
}
app.use(Naive)
app.mount('#app')
