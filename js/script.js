var runes = require('./runes')
var runewords = require('./runewords')
var audio = new Audio('../mp3/greetings.mp3')
audio.play()

new Vue({
  el: '#app',
  data: {
    search: '',
    filterune: '',
    runes: runes,
    runewords: runewords
  },

  methods: {
    displayRunes: function () {
      this.runewords = ''
      this.runes = runes
    },
    displayRunewords: function () {
      this.runes = ''
      this.runewords = runewords
    },
    displayAll: function () {
      this.runes = runes
      this.runewords = runewords
    }
  },
  filters: {
    filterune: function (val) {
      var filtered = this.runewords.filter(function (el) {
        return el.combinationOrder.includes(val)
      })
      return filtered
    }
  }

})
