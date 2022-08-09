const appElements = {
    data(){
        return {
            counter: 0,
            title: 'Счетчик',
        }
    }
}

const app = Vue.createApp(appElements)

app.mount('#app')

// Или так Vue.createApp(appElements).mount('#app')