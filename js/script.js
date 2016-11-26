var runes = require('./runes')
var runewords = require('./runewords')

new Vue({
  el: '#app',

  data: {
    search: '',
    runes: runes,
    runewords: runewords
  },

  methods: {

  }
})

var audio = new Audio('../mp3/greetings.mp3')
audio.play()
