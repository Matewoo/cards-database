import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Mudsdale",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mudbray",
	},



	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Mud Bomb",
			},

			damage: 50,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Heavy Slam",
			},
			effect: {
				en: "This attack does 30 less damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			},
			damage: "180-",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card