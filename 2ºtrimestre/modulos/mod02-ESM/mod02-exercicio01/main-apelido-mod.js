// Usamos o * para dizer que estamos
// importando TUDO de um arquivo
// o termo "as" permite criar um apelido

import * as petShop from './gato-mod.js'

console.log(petShop.AlimentarGato('frajola', 'fruta'))
console.log(petShop.BanhoGato('sphinx', 'quente'))
console.log(petShop.TosaGato('vira-lata', 'puppy'))
