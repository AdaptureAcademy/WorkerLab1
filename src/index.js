/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		// Print arguments to console
		console.log('Argumentos recibidos:');
		console.log('request:', request);
		console.log('env:', env);
		console.log('ctx:', ctx);

		return new Response('Hello World!');
	},
};