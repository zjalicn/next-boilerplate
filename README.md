- Next 14
- Lucia Auth
- Postgre SQL
- Drizzle ORM
- Typescript
- Tailwind CSS
- Shadcn UI

## Installation

Install the package using npm or yarn

```bash
npm install
```

or

```bash
yarn
```

## Usage (Development)

```bash
npm run dev
```

or

```bash
yarn dev
```

or you can use Docker-compose

```bash
docker-compose up
```

It will start the server on http://localhost:3000 and create a local postgres database on port 5432

## Database
You can create a local postgres database and add the credentials to the .env file

```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=username -e POSTGRES_DB=dbname -p 5432:5432 -d postgres
```

```bash
DATABASE_URL=postgres://username:password@localhost:5432/dbname
```

```bash
npx drizzle-kit studio
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
