// document.getElementById('greetings').play()
var runes = require('./runes')
var runewords = require('./runewords')

new Vue({
  el: '#app',
  data: {
    search: '',
    filterune: '',
    picked: '',
    searchBy: '',
    dRunes: true,
    dRunewords: false,
    dAll: true,
    bRunes: true,
    bRunewords: false,
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
      this.dRunewords = true
      this.dRunes = true
      this.dAll = true
    },
    byRunes: function () {
      this.displayAll()
      this.bRunes = true
      this.bRunewords = false
    },
    byRunewords: function (e) {
      if (e.target.checked) {
        this.clearInput()
        this.displayRunewords()
        this.bRunewords = true
        this.bRunes = false
      } else {
        this.clearInput()
        this.byRunes()
      }
    },
    clearInput: function () {
      document.querySelector('.rune-search').value = ''
      this.search = ''
      this.filterune = ''
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
