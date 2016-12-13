var runes = require('./runes')
var runewords = require('./runewords')
var audio = new Audio('../mp3/greetings.mp3')
// audio.play()

new Vue({
  el: '#app',
  data: {
    search: '',
    filterune: '',
    picked: '',
    dRunes: false,
    dRunewords: false,
    dAll: true,
    runes: runes,
    runewords: runewords
  },

  methods: {
    displayRunes: function () {
      this.dRunes = true
      this.dRunewords = false
      this.dAll = false
    },
    displayRunewords: function () {
      this.dRunewords = true
      this.dRunes = false
      this.dAll = false
    },
    displayAll: function () {
      this.dAll = true
    }
  },

  // This works but it's confusing to have two inputs
  filters: {
    filterune: function (val) {
      var filtered = this.runewords.filter(function (el) {
        return el.combinationOrder.includes(val)
      })
      return filtered
    }
  }
})
