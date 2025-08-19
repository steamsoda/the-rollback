# Dragon Force Monterrey – Academy Ops

## Environment Variables

This project requires the following environment variables to be configured:

### Required Variables

- **`DATABASE_URL`** - Database connection string for Prisma ORM
  - **Production/Preview**: Set in Vercel dashboard under Settings → Environment Variables
  - **Development**: Copy `env.example` to `.env.local` and fill in your local database URL
  - **Format**: `postgresql://user:password@host:port/database?schema=public` (PostgreSQL) or `file:./dev.db` (SQLite for development)

- **`NEXTAUTH_SECRET`** - Secret key for NextAuth.js session encryption
  - **Production/Preview**: Set in Vercel dashboard under Settings → Environment Variables
  - **Development**: Copy `env.example` to `.env.local` and generate a strong random string
  - **Generate**: Use `openssl rand -base64 32` or any secure random string generator

- **`NEXTAUTH_URL`** - Base URL for NextAuth.js callbacks
  - **Production**: Set to your domain (e.g., `https://yourdomain.com`)
  - **Preview**: Set to your preview deployment URL
  - **Development**: Set to `http://localhost:3000`

### Local Development Setup

1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Fill in the required values in `.env.local`:
   ```bash
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each required variable with appropriate values for your environment
4. Redeploy your application

**Note**: The build process will fail if `.env` or `.env.local` files are committed to git. Use the provided `env.example` as a template for local development.
