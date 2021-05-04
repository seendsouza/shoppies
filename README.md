# Shoppies

## Getting Started

First, install node modules:

```bash
npm install 
# or
yarn install 
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Production Builds

For production builds, create a .env file with your OMDB API key.

It should look like this:

```
NEXT_PUBLIC_OMDB_API_KEY=<apikey>
```

Second, build the code:

```bash
npm run build
# or
yarn build
```

Third, run the production server:

```bash
npm run start
# or
yarn start
```
