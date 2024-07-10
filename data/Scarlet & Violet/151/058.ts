import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		fr: "Caninos",
		en: "Growlithe",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Évaporation",
			en: "Vaporize",
			es: "Vaporizar",
			it: "Vaporizzare",
			pt: "Evaporar",
			de: "Vaporisieren"
		},

		effect: {
			fr: "Défaussez une Énergie Water du Pokémon Actif de votre adversaire.",
			en: "Discard a Water Energy from your opponent's Active Pokémon.",
			es: "Descarta 1 Energía Water del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia Water dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia Water do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Water-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	retreat: 2,

	description: {
		de: "Es ist von Natur aus tapfer und vertrauenswürdig und scheut auch vor Gegnern nicht zurück, die größer und stärker sind als es selbst."
	},

	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card