# Personal Portfolio

A portfolio composed of many different things such as API usage, database management and so on. Meant to show of my skills as a webdeveloper.

## Installing

### Prerequisites

Before starting, make sure you have the following installed on your system:

- Git: Version control system to clone the project repository.
- Node.js: JavaScript runtime environment.
- PNPM: Package manager for installing dependencies.

### Step 1: Clone the Repository

Open your terminal and run the following command to clone the project repository:

```bash
$ git clone https://github.com/8char/portfolio.git
```

### Step 2: Install Dependencies

Navigate to the project directory by running:

```bash
$ cd portfolio
```

Once you're inside the project directory, run the following command to install the dependencies:

```bash
$ pnpm i
```

### Step 3: Configure Environment Variables

The project requires certain environment variables to be set. Create a new file named .env in the project's root directory. You can use the provided `.env.example` file as a template. Open the `.env` file and fill in the required values for the environment variables. For example:

```dotenv
DATABASE_URL="file:./dev.db"
VITE_DISCORD_USER_ID="166942585162563585"
GITHUB_CLIENT_ID="a0a0aa0a0aa0a0a0a0a0a0a0a0"
GITHUB_CLIENT_SECRET="aa000aaa00a0a00a0a00a0a0a0a0a00a"
GH_TOKEN="ghp_aa0a0a0a0a0a0a0a00aa0a0a0a0a0a0a0a0"
```

Save the file after updating the values.

### Step 4: Run Prisma Migration

To set up the database schema, run the following command:

```bash
$ pnpm prisma migrate dev --name init
```

This command will apply the initial migration to create the necessary database tables.

### Step 5: Start the Development Server

Finally, start the development server by running:

```bash
$ pnpm dev
```

The server will compile the code and start running your portfolio website on a local development environment.

You have successfully installed and started a development version of your portfolio website. You can now access your website by visiting [http://localhost:5173](http://localhost:5173) in your web browser.
