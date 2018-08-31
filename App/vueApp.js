var app = new Vue({
    el: '#app',
    data: {
        message: 'Olá Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
  
  // Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var appComponent = new Vue({
  el: '#app-component'
})

Vue.component('todo-item2', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var appComponent2 = new Vue({
  el: '#app-component2',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetebles' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Meat' }
    ]
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj) // Congela o valor, inabilitanto a

new Vue({
  el: '#app-7',
  data: obj,
  created: function () {
    // `this` aponta para a instância
    console.log('obj é: ' + this.foo)
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
      message: '<span style="color:red">Sou uma mensagem HTML</span>'
  }
})