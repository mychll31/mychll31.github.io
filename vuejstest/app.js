new Vue({
  el: '#app',
  data: {
    message: 'INPUT PASSWORD',
    items:[{row:1}, {row:2}, {row:3}, {row:4}, {row:5}],
  },

  methods: {
  	checkPassword: function(){
      if(this.pass == 'asdf'){
        window.location.href = 'main.html'
      }else{
        this.message = "TRY AGAIN GIRL!"
      }
  	}
  }
})