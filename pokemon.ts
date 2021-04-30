export class Pokemon {
    public name: string;
    public vit: number;
    public pv: number;
    public attack: number;
    public tech: any;

    constructor(name: string, vit: number, pv: number, attack: number, tech: any) {
        this.name = name;
        this.vit = vit;
        this.pv = pv;
        this.attack = attack;
        this.tech = tech;
    }

    attackPokemon(){
        return this.tech[Math.floor(Math.random() * 4)];
    }
}

module.exports = { Pokemon }
