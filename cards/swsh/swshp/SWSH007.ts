import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swshp'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swshp-${localId}`,
	localId: localId,

	// Card informations
	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		type: AbilityType.TALENT,
		name: {
			en: "Ice Dance",
			fr: "Dans de Glace"
		},
		text: {
			en: "As often as you like during your turn, you may attach a Wate Energy card from your hand to 1 of your Benched Water Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Eau de votre main à l'un de vos Pokémon Eau de Banc."
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
