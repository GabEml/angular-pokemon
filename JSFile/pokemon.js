"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, vit, pv, attack, tech) {
        this.name = name;
        this.vit = vit;
        this.pv = pv;
        this.attack = attack;
        this.tech = tech;
    }
    Pokemon.prototype.attackPokemon = function () {
        return this.tech[Math.floor(Math.random() * 4)];
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
module.exports = { Pokemon: Pokemon };
