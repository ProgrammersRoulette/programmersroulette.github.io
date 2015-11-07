
var languages = [
  'C',
  'C++',
  'Go',
  'Java',
  'Javascript',
  'Lua',
  'Java',
  'Erlang'
]

var challenges = [
  'Name Generator',
  'Calculate Age in Seconds',
  'Encrypt/Decrypt Algorithm',
  'FizzBuzz',
  'Hangman',
  'Love Calculator',
  'Password Generator',
  'Magic Eight Ball',
  'Connect Four',
  'Maze Generator/Solver',
  'Calculate and Print 100 Facorial',
  'Fibonnaci Sequence'
]

var interfaces = [
  'GUI',
  'Terminal',
  'Webapp',
  'Qt.',
  'SDL',
  'REST API',
  'RPC'
]

var userRoll = {}


var templates = {}

var loadTemplates = function () {
  templates.roll = $('#templateRoll').html()
}

var roll = function () {
  this.language = rollArray(languages)
  this.challenge = rollArray(challenges)
  this.interfaces = rollArray(interfaces)


}

var changeHash = function (h) {
  if (h === undefined) {
    h = JSON.stringify(userRoll)
  }
  h = btoa(h)
  window.history.pushState(null, null, '#' + h);
}

var rollRoulette = function (r) {
  if (r === undefined) {
    r = new roll()
  }else if ($.type(r) === 'string') {
    r = JSON.parse( atob(r) )
  }

  userRoll = r
  changeHash()
  var t = Mustache.render(templates.roll, r, templates)
  $('#roll').html(t)
}

var rollArray = function (array) {
  return array[Math.floor(Math.random()*array.length)];
}


$(document).ready(function () {
  loadTemplates()
  userRoll = {}
  h = window.location.hash.replace(/^#!?/, '');
  if (h !== '') {
    rollRoulette(h)
  }else{
    rollRoulette()
  }

})
