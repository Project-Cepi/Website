import type IShowcase from './_showcase';

const showcase: IShowcase[] = [
	{
		creators: [],
		description: "Alpha area for Minestom.",
		slug: "alpha-minestom",
		video: "https://www.youtube.com/watch?v=aLJ2rYaKp5Q"
	},
	{
		creators: [],
		slug: "relan-old",
		description: "Relan before being revamped."
	},
	{
		creators: [],
		slug: "relan",
		description: "Relan with volumetric lighting."
	},
	{
		creators: [],
		slug: "tarnis-shady",
		description: "A shady spot in Tarnis"
	},
	{
		creators: [],
		slug: "tarnis-big-tree",
		description: "A big tree overshadows Tarnis, making the brighter colors pop out."
	},
	{
		creators: ["savagechick3n"],
		slug: "knife",
		description: "Jakane holds a knife behind him towards a wall."
	},
	{
		creators: [],
		slug: "cliff-shores",
		description: "A small apple farm close to the cliff of the ocean."
	},
	{
		creators: [],
		slug: "adrigona-valley",
		description: "Simple farmers in a not-so-simple land."
	},
	{
		creators: [],
		slug: "crystal-mine",
		description: "People come from far and wide for this divine rock."
	},
	{
		creators: [],
		slug: "mountain-tree",
		description: "A really, really big tree on top of a mountain."
	},
	{
		creators: [],
		slug: "wandchucks",
		description: "The perfect combo."
	},
	{
		creators: [],
		slug: "custom-blocks",
		description: "More options, more flavor."
	}
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(showcase));
}