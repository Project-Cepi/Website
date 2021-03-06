import type IShowcase from './_showcase';

const showcase: IShowcase[] = [
	{
		description: "Alpha area for Minestom.",
		slug: "alpha-minestom",
		video: "https://www.youtube.com/watch?v=aLJ2rYaKp5Q"
	},
	{
		slug: "relan",
		description: "A peaceful village hidden within a magical mountain.."
	},
	{
		slug: "tarnis",
		description: "Rebellious town."
	},
	{
		slug: "tarnis-alleyway",
		description: "Colorful markets of a colorful community."
	},
	{
		creators: ["savagechick3n"],
		slug: "knife",
		description: "Jakane holds a knife behind him towards a wall."
	},
	{
		slug: "cliff-shores",
		description: "A small apple farm close to the cliff of the ocean."
	},
	{
		slug: "adrigona-valley",
		description: "Simple farmers in a not-so-simple land."
	},
	{
		slug: "crystal-mine",
		description: "People come from far and wide for this divine rock."
	},
	{
		slug: "mountain-tree",
		description: "A really, really big tree on top of a mountain."
	},
	{
		slug: "wandchucks",
		description: "The perfect combo."
	},
	{
		slug: "custom-blocks",
		description: "More options, more flavor."
	}
];

export async function get(): Promise<{ body: IShowcase[] }> {

	return {
		body: showcase
	}
}