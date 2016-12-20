var runes = require('./runes')
var runewords = require('./runewords')

new Vue({
  el: '#app',
  data: {
    search: '',
    filterune: '',
    picked: '',
    searchBy: '',
    dRunes: false, // true
    dRunewords: false,
    dAll: true,
    bRunes: true,
    bRunewords: false,
    runes: runes,
    runewords: runewords
  },

  methods: {
    displayRunes: function () {
      this.hideHr()
      this.dRunes = true
      this.dRunewords = false
      this.dAll = false
    },
    displayRunewords: function () {
      this.hideHr()
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
        this.disableInputRadio(true)
        var inputs = document.querySelectorAll('input[type="radio"]')
        inputs[1].checked = true
        this.clearInput()
        this.displayRunewords()
        this.bRunewords = true
        this.bRunes = false
      } else {
        this.disableInputRadio(false)
        var inputs = document.querySelectorAll('input[type="radio"]')
        inputs[2].checked = true
        this.clearInput()
        this.byRunes()
      }
    },
    disableInputRadio: function (bool) {
      var inputs = document.querySelectorAll('input[type="radio"]')
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false
        inputs[i].disabled = bool
      }
    },
    clearInput: function () {
      document.querySelectorAll('.rune-search').value = ''
      this.search = ''
      this.filterune = ''
    },
    hideHr: function () {
      document.querySelector('hr').classList.toggle('hidden')
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
