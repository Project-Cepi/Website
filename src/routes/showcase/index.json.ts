import type IShowcase from './_showcase';

const showcase: IShowcase[] = [
	{
		url: "https://cdn.discordapp.com/attachments/707787042750201906/746181584025026610/2020-08-20_20.31.46.png",
		creators: ["savagechick3n", "LeoDog896"],
		description: "Retextured unused slabs turned dirty."
	},
	{
		url: "https://cdn.discordapp.com/attachments/714993312037339167/788817276245639168/2020-12-15_15.04.32.png",
		creators: [],
		description: "Alpha area for Minestom.",
		video: "https://www.youtube.com/watch?v=aLJ2rYaKp5Q&feature=youtu.be"
	},
	{
		url: "https://cdn.discordapp.com/attachments/714993312037339167/788817333815738378/2020-10-21_16.01.32.png",
		creators: [],
		description: "Relan before being revamped."
	},
	{
		url: "https://cdn.discordapp.com/attachments/714993312037339167/788817400053235732/2020-10-20_14.14.26.png",
		creators: [],
		description: "Relan with volumetric lighting."
	},
	{
		url: "https://cdn.discordapp.com/attachments/714993312037339167/788817557049442324/2020-09-02_09.53.17.png",
		creators: [],
		description: "A shady spot in Tarnis"
	},
	{
		url: "https://cdn.discordapp.com/attachments/714993312037339167/788817724317892608/2020-10-01_22.12.41.png",
		creators: [],
		description: "A big tree overshadows Tarnis, making the brighter colors pop out."
	},
	{
		"url": "https://i.imgur.com/hIKkXzn.jpg",
		creators: [],
		description: "A colorful bird in the colorful tarnis area."
	}
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(showcase));
}