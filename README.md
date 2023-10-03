# LAB: Getting Started with Cloudflare Workers

## Setting up your first Cloudflare Worker

This guide will instruct you through setting up and deploying your first Worker on Cloudflare, providing a smooth pathway from creation to deployment.

*NOTE: The repo contains a "Hello World" worker project that you can clone. Alternatively, you can follow this guide to setup `npm` and `wrangler` to create a new project on your own.*

---
## What is a Cloudflare Worker?

Cloudflare Workers allow you to write serverless functions that can:
- Serve static pages or assets
- Act as a REST API or proxy
- Manipulate HTTP requests and responses
- And much more, all happening closer to the end user by leveraging Cloudflare's global network.
- Redirect requests and users to other URLs

Cloudflare workers are written in JavaScript, and can be written in TypeScript as well. They are versatile when it comes to use cases, and can be used to serve static pages, act as a REST API, or even manipulate HTTP requests and responses. They are also extremely fast, as they are executed on Cloudflare's global network, which is closer to the end user.

---
## Get Started in the Dashboard

If you prefer using a UI:
1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
2. Navigate to **Workers & Pages > Create application**.
3. Select **Create Worker > Deploy**.

---
## Prerequisites

Before getting hands-on, ensure you have:
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed.
- To install Node.js through NVM, you can use the following command in your terminal/bash:
```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && source ~/.bashrc   && nvm install 18.16.0 && nvm use 18.16.0
```
*Ensure you're using Node.js version 16.13.0 or later for compatibility with Wrangler.*

---
## 1. Create a New Worker Project with C3 (create-cloudflare-cli)

After installing NPM, you can use C3 tool to help setup your project. C3 assists in rapidly setting up and deploying Workers to Cloudflare.

```bash
npm create cloudflare@latest
```

Follow the prompts to:
- Name your Worker directory and choose where to create your application.
- Opt for the "Hello World" script for a basic Worker setup.
- Decide whether to use TypeScript (select 'no' for a JS project).

After project generation, navigate to the project directory. Your structure should include `wrangler.toml`, `index.js` (or `.ts` for TypeScript), `package.json`, and `package-lock.json`. The `node_modules` directory will be created which contains all the dependencies for your project. The required dependencies for the project are listed in `package.json`.

## 2. Install Wranlger Command Line Interface (CLI)
- Use the following command in your bash/terminal to install wrangler on your device:
```bash
npm install -g @cloudflare/wrangler
```

## 3. Develop with Wrangler Command Line Interface (CLI)

Wrangler is the official CLI for Cloudflare Workers, which C3 installs by default.

To start developing:
```bash
npm run dev
```

This command will spin up a **local** server. Your worker will be available at `http://127.0.0.1:8787`, and code changes will automatically rebuild your project.

## 4. Write Code

The `src/index.js` file in your project contains your Worker's code. Here’s an example of a basic worker that returns "Hello World!":

```javascript
export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
};
```

*Feel free to modify the code and observe changes in real time with `wrangler dev` running. You can also add additional routes to your Worker by adding more functions to the `export default` object or you can write a script that redirects users to another URL. You can even interact with external APIs (i.e. Cloudflare API) and databases here.*

## 5. Deploy Your Project

Deploy your Worker using Wrangler, either to a `*.workers.dev` subdomain or a custom domain.

```bash
npm run deploy
```

If using Wrangler for the first time, it will open a browser for authentication. Your Worker will be live at `<YOUR_WORKER>.<YOUR_SUBDOMAIN>.workers.dev`.

---
## Conclusion

Congratulations on setting up and deploying a Cloudflare Worker! From here, you can explore further, modify your worker to serve specific content, act as an API, and much more. Ensure to explore more [examples](https://developers.cloudflare.com/workers/examples) and dive deeper into advanced topics.
