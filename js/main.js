const hr = {
    data() {
      return {
        products: ["Пиво жадетское", "Водка Мароша", "Водка океан"],
      }
    },
    methods:{
        test(){
            console.log("sdfa")
        }
    }
  }
Vue.createApp(hr).mount('#hr')
const menu = {
  data() {
    return {
      category: ["Пиво", "Водка", "Вино", "Коньяк"]
    }
  },
}
Vue.createApp(menu).mount('#menu')
  