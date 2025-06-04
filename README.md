# Project Inspired by Pyxiscience

This project is a partial reproduction of the Pyxiscience platform interface, with some graphical and functional liberties. It was developed as a personal project to familiarize myself with their tech stack and UX approach.

> [!WARNING]  
> **_Due to the very short development timeframe,
> <ins>only a few very bascis features are implemented</ins>
> and the GraphQL API is just a learning POC._**

## Goals

- Reproduce a section of the platform with consistent UX
- Explore possible interactions (navigation, cards, etc.)
- Use the same technologies

## Tech Stack

- **Next.js (React)**
- **NestJS**
- **Prisma**
- **GraphQL**
- **Turborepo**

## Included Features

- Module interface with dynamic cards
- Sidebar with active navigation links
- Reusable components for forms, layout, etc.
- Dynamic routing system (Next.js)
- Basic GraphQL API
- Responsive design on all screen sizes

## Preview

![screenshot](./apps/web/public/screenshot.png)

> [!NOTE]
>
> - The project was built without access to the original source code.
> - Design choices are based on publicly available elements
>   (screenshots from [Pyxiscience’s website](https://pyxiscience.com/)).
> - Goal: demonstrate some technical skills and adaptability to a new stack.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommanded)
- [pnpm](https://pnpm.io/) (If you don't already have it `npm install -g pnpm`)

## Installation

_At the root of the repo :_

Install dependencies with `pnpm i`:

```bash
pnpm i
```

## Set .env file on `apps/api`:

Copy the `.env.example` file to `.env` and fill in the required variables.

## Dev servers :

_If you want separated terminals for each app, from the root of the repo, execute :_

```bash
cd apps/api
```

```bash
pnpm dev
```

and in another terminal window

```bash
cd apps/web
```

```bash
pnpm dev
```

_Or at the root of the repo :_

```bash
pnpm dev
```

Visit services on your localhost at :

- [API](http://localhost:3000/graphql)

- [Web](http://localhost:3001/dashboard)

> [!IMPORTANT]
> While waiting for more developpments to be done, the only real page and link is "Tableau de bord". \n
> Other links are only displaying empty pages with their titles
