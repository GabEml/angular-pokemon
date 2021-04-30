const pokemon = require('../JSFile/pokemon');
const combat = require('../JSFile/combat');

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

let pokemon1 = new pokemon.Pokemon('Dracofeu', 105, 800, 100, pokeCapacity1);
let pokemon2 = new pokemon.Pokemon('tyranocif', 100, 1500, 200, pokeCapacity2);

test('Quel est le pokemon le plus rapide ?', () => {
    expect(combat.firstAttack(pokemon1, pokemon2)).toBe(pokemon1);
});

test('Quel attack va etre executé ! Retourn une attaque', () => {
    expect(pokemon1.attackPokemon(pokemon1));
});

test('que le combat commence test ! Retourne un vainqueur !', () => {
    expect(combat.fight(pokemon1, pokemon2)).toBe(pokemon2);
});
