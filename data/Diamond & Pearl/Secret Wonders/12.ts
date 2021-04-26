import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		463,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tongue Reel",
				fr: "Langue enroulante",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. If you choose a Benched Pokémon, switch the Defending Pokémon with that Pokémon. This attack does 20 damage to the Pokémon you chose. Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Si vous choisissez un Pokémon de Banc, échangez le Pokémon Défenseur avec ce Pokémon. Cette attaque inflige 20 dégâts au Pokémon choisi. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boundless Power",
				fr: "Puissance illimitée",
			},
			effect: {
				en: "During your next turn, Lickilicky can't attack.",
				fr: "Lors de votre prochain tour, Coudlangue ne peut pas attaquer.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],

	retreat: 4,



}

export default card