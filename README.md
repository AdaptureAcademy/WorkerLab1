# Fauna-Cloudflare Worker

I created a globally distributed, serverless REST API using Cloudflare Workers and Fauna as a data layer. In this venture, I utilized **Hono**, a web framework for Cloudflare Workers, and **Fauna**, a serverless cloud database, to manage an inventory of products.

## Table of Contents
- [Prerequisites](#prerequisites)
- [My Setup and Installation Steps](#setup-and-installation)
- [API Documentation - My Routes](#api-documentation)
- [Deployment - My Way](#deployment)
- [Testing - Checking Functionality](#testing)
- [Conclusion - Wrapping It Up](#conclusion)

## Prerequisites
- A Cloudflare Workers account
- Local installation of Node.js and NPM
- A Fauna account
- A fundamental understanding of TypeScript

## My Setup and Installation Steps
In this section, I adhered to the steps and guidelines from the "Cloudflare Workers Fauna REST API Tutorial" and integrated the provided code into it.

### FaunaDB Setup
1. **Creating My Database**: I followed the [tutorial](https://developers.cloudflare.com/workers/tutorials/store-data-with-fauna/) steps to set up my FaunaDB, which involved the creation of the "Products" collection and obtaining my server secret key.

### Cloudflare Worker Setup
1. **Creating a New Worker Project**: I initialized a new project with my desired settings:
   ```bash
   npm create cloudflare@latest
   ```
2. **Installing Dependencies**: I ensured to install the Fauna JavaScript driver and other necessary libraries:
   ```bash
   npm install fauna
   ```
3. **Configuring Secrets**: I set up `FAUNA_SECRET` as described in the tutorial, making sure it's available for development (`.dev.vars`) and during runtime (via Wrangler secrets).

### Code Implementation
I replaced the `src/index.ts` file in my Worker project directory with the provided code snippet to embed the inventory management logic.

## API Documentation - My Routes
I designed the REST API to offer several endpoints to interact with the product inventory:

### 1. `GET /`
A friendly route that returns a simple welcome message.

### 2. `POST /products`
**Payload**:
```json
{
  "serialNumber": "STRING",
  "title": "STRING",
  "weightLbs": "NUMBER"
}
```
**Description**: I used this to create a new product, specifying its serial number, title, and weight. The quantity is set to default at 0.

### 3. `GET /products/:id`
**Description**: This fetches the details of a product using its ID.

### 4. `DELETE /products/:id`
**Description**: Here, I can delete a product using its ID.

### 5. `PATCH /products/:productId/add-quantity`
**Payload**:
```json
{
  "quantity": "NUMBER"
}
```
**Description**: It allows me to add to the product’s quantity using its `productId`.

## Deployment - My Way
I ensured my Worker was primed for deployment by sticking to the following steps:

1. **Testing Locally**:
   I tested the Worker on my local machine using:
   ```bash
   npm run dev
   ```
2. **Deploying**:
   I deployed the Worker to Cloudflare:
   ```bash
   npm run deploy
   ```
   I verified that the app is live and responding to requests as expected.

## Testing - Checking Functionality
The Worker was deployed and ready to go. I tested the API endpoints to ensure that they were working as expected. It's live on the following link:
```bash
https://fauna-workers.abdullah-baig416.workers.dev
```

I utilized `curl` commands and Postman to validate the API functionality. Here's an example `curl` command to create a new product:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"serialNumber":"A123","title":"Product 1","weightLbs":1.5}' https://fauna-workers.abdullah-baig416.workers.dev/products
```

The newly created record above can be fetched using the following `curl` command:
```bash
curl https://fauna-workers.abdullah-baig416.workers.dev/products/<id of the record>
```

## Conclusion - Wrapping It Up
I have successfully built a serverless REST API using Cloudflare Workers and FaunaDB.