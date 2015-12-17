new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    colors:[
    	{ text: 'red' },
    	{ text: 'orange' },
    	{ text: 'yellow' }
    ]
  },

  methods: {
  	reverseMessage: function(){
  		alert('hi')
  	}
  }
})