import {Pokemon} from "./pokemon";

let pokeCapacity1 = {
    0: {key: 'Deflagration', value: 2},
    1: {key: 'frappe atlas', value: 1.75},
    2: {key: 'lance-flamme', value: 1.5},
    3: {key: 'vol', value: 1.5}
};

let pokeCapacity2 = {
    0: {key: 'Ultralaser', value: 2},
    1: {key: 'machouille', value: 1.75},
    2: {key: 'Lame-roc', value: 2},
    3: {key: 'seisme', value: 1.5}
};

let pokemon1 = new Pokemon('Dracofeu', 105, 800, 100, pokeCapacity1);
let pokemon2 = new Pokemon('tyranocif', 100, 1500, 200, pokeCapacity2);


export function firstAttack( pokemon1: Pokemon, pokemon2: Pokemon): Pokemon{
    if(pokemon1.vit > pokemon2.vit){
        return pokemon1;
    }
    return pokemon2;
}

export function fight(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon{
    let first: Pokemon = firstAttack(pokemon1, pokemon2);
    let i: number = 0;
    let second: Pokemon = (pokemon1 != first) ?  pokemon1 : pokemon2;
    console.log('pokemon started is :'+ first.name);
    while(i < 10){
        let attack = first.attackPokemon()
        console.log(first.name + ' lance :' + attack.key);
        let damage = first.attack * attack.value
        console.log(second.name + ' perd '+ damage +' pv')
        second.pv = second.pv - damage;

        let attack2 = second.attackPokemon()
        console.log(second.name + ' lance :' + attack2.key);
        let damage2 = second.attack * attack2.value
        console.log(first.name + ' perd '+ damage2 +' pv')
        first.pv = first.pv - damage2;
        i++;
        if (first.pv <= 0 || second.pv <= 0){
            break;
        }
    }
    first.pv = (first.pv < 0) ? 0 : first.pv;
    second.pv = (second.pv < 0) ? 0 : second.pv;

    console.log(first.pv + ' vie de draceaufeu')
    console.log(second.pv + ' vie de tyranocif')
    return (first.pv > second.pv) ? first : second;
}

console.log("Le grand vainqueur est " + fight(pokemon1, pokemon2).name);
