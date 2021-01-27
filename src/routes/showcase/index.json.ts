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
	}
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(showcase));
}