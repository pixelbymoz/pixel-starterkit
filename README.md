# Pixel Starterkit

A modern, full-stack Next.js starter kit built for speed and scalability.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **AI Integration:** [AI SDK](https://sdk.vercel.ai/) (OpenAI)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- PostgreSQL database (e.g., Neon)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd pixel-starterkit
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Environment Setup:**

    Copy the example environment file and update the variables.

    ```bash
    cp .env.example .env
    ```

    Update `.env` with your credentials (database URL, auth secrets, API keys).

4.  **Database Setup:**

    Push the schema to your database.

    ```bash
    npm run db:push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema to DB (prototyping)
- `npm run db:studio` - Open Drizzle Studio to view data

## 📂 Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components
- `/db` - Database schema and connection configuration
- `/lib` - Utility functions and shared logic
- `/public` - Static assets
