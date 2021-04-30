"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = exports.firstAttack = void 0;
var pokemon_1 = require("./pokemon");
var pokeCapacity1 = {
    0: { key: 'Deflagration', value: 2 },
    1: { key: 'frappe atlas', value: 1.75 },
    2: { key: 'lance-flamme', value: 1.5 },
    3: { key: 'vol', value: 1.5 }
};
var pokeCapacity2 = {
    0: { key: 'Ultralaser', value: 2 },
    1: { key: 'machouille', value: 1.75 },
    2: { key: 'Lame-roc', value: 2 },
    3: { key: 'seisme', value: 1.5 }
};
var pokemon1 = new pokemon_1.Pokemon('Dracofeu', 105, 800, 100, pokeCapacity1);
var pokemon2 = new pokemon_1.Pokemon('tyranocif', 100, 1500, 200, pokeCapacity2);
function firstAttack(pokemon1, pokemon2) {
    if (pokemon1.vit > pokemon2.vit) {
        return pokemon1;
    }
    return pokemon2;
}
exports.firstAttack = firstAttack;
function fight(pokemon1, pokemon2) {
    var first = firstAttack(pokemon1, pokemon2);
    var i = 0;
    var second = (pokemon1 != first) ? pokemon1 : pokemon2;
    console.log('pokemon started is :' + first.name);
    while (i < 10) {
        var attack = first.attackPokemon();
        console.log(first.name + ' lance :' + attack.key);
        var damage = first.attack * attack.value;
        console.log(second.name + ' perd ' + damage + ' pv');
        second.pv = second.pv - damage;
        var attack2 = second.attackPokemon();
        console.log(second.name + ' lance :' + attack2.key);
        var damage2 = second.attack * attack2.value;
        console.log(first.name + ' perd ' + damage2 + ' pv');
        first.pv = first.pv - damage2;
        i++;
        if (first.pv <= 0 || second.pv <= 0) {
            break;
        }
    }
    first.pv = (first.pv < 0) ? 0 : first.pv;
    second.pv = (second.pv < 0) ? 0 : second.pv;
    console.log(first.pv + ' vie de draceaufeu');
    console.log(second.pv + ' vie de tyranocif');
    return (first.pv > second.pv) ? first : second;
}
exports.fight = fight;
console.log("Le grand vainqueur est " + fight(pokemon1, pokemon2).name);
