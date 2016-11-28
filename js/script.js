var runes = require('./runes')
var runewords = require('./runewords')
var audio = new Audio('../mp3/greetings.mp3')
audio.play()

new Vue({
  el: '#app',
  data: {
    search: '',
    filterune: '',
    picked: '',
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

$(function () {
  $('img.svg').each(function () {
    var $img = $(this)
    var imgID = $img.attr('id')
    var imgClass = $img.attr('class')
    var imgURL = $img.attr('src')

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg')

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID)
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg')
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a')

      // Replace image with new SVG
      $img.replaceWith($svg)
    }, 'xml')
  })
})
