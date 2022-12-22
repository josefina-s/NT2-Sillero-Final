import Vue from "vue";

Vue.filter('fahrenheit', function (valor) {
  if (!valor) return ''
  valor = (valor * 1.8) + 32
  return valor
})

Vue.filter('kelvin', function (valor) {
    if (!valor) return ''
    valor = (valor * 1) + 273.15
  return valor
  })

  

