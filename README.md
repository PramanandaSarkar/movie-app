# Simple React app
![image info](./public/movie-app.png)

## Features
1. Search Movies
2. Favorite Movie Management
3. Persistent Favorites in browser localStorage

## Technology Used
1. Vite React app for build and development
2. React Router for navigation
3. Context API for state management
4. CSS for simple styling
5. TMDB API for movie data


## quickStart
```bash
# Clone and rename the template
git clone https://github.com/PramanandaSarkar/movie-app.git
cd movie-app

# Install dependencies
npm install
or 
yarn install

# Set up your environment
cp .env.example .env

# Initialize database
npx prisma migrate dev
npx prisma generate

# Start development
npm run dev 
or 
yarn dev
```