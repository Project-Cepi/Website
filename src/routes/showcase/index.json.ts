interface ImageShowcase {
	url: string;
	description?: string;
	creators: string[];
}

const images: ImageShowcase[] = [
	{
		url: "https://cdn.discordapp.com/attachments/707787042750201906/746181584025026610/2020-08-20_20.31.46.png",
		creators: ["savagechick3n", "LeoDog896"],
		description: "Retextured unused slabs turned dirty."
	}
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(images));
}