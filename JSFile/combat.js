"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = exports.firstAttack = void 0;
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
    while (i < 3) {
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
    }
    console.log(first.pv + ' vie de draceaufeu');
    console.log(second.pv + ' vie de tyranocif');
    return (first.pv > second.pv) ? first : second;
}
exports.fight = fight;
