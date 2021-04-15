import { about } from './_about'

export async function get(): Promise<{ body: string }> {

	return {
		body: about
	}
}