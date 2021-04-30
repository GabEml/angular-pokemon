import {Pokemon} from "./pokemon";

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
    while(i < 3){
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
    }

    console.log(first.pv + ' vie de draceaufeu')
    console.log(second.pv + ' vie de tyranocif')
    return (first.pv > second.pv) ? first : second;
}
