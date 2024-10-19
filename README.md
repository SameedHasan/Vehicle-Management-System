This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# PostgreSQL Setup Guide

## Step 1: Create User and Database

1. Switch to the PostgreSQL user:
   ```bash
   sudo -i -u postgres
   ```
2. Open the PostgreSQL command line:
   ```bash
   psql
   ```
3. Create a new user:
   ```sql
   CREATE USER sameedhasan WITH PASSWORD 'sameed@123';
   ```
4. Create a new database:
   ```sql
   CREATE DATABASE sameeddb;
   ```
5. Grant all privileges on the new database to the user:
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE sameeddb TO sameedhasan;
   ```
6. Exit the PostgreSQL command line:
   ```sql
   \q
   ```
7. Exit the PostgreSQL user:
   ```bash
   exit
   ```

## Step 2: Configure PostgreSQL to Listen on All Addresses

1. Open the PostgreSQL configuration file:
   ```bash
   sudo nano /etc/postgresql/12/main/postgresql.conf
   ```
2. Look for the line that starts with `listen_addresses` and change it to:
   ```plaintext
   listen_addresses = '*'
   ```
   Make sure this line is uncommented.

## Step 3: Allow Remote Connections

1. Open the host-based authentication configuration file:
   ```bash
   sudo nano /etc/postgresql/14/main/pg_hba.conf
   ```
2. Add the following line at the end of the file to allow remote connections (replace `your-server-ip` with your server's IP or `0.0.0.0/0` to allow all IPs):
   ```plaintext
   host    all             all             0.0.0.0/0               md5
   ```

## Step 4: Restart PostgreSQL

1. Restart PostgreSQL to apply changes:
   ```bash
   sudo systemctl restart postgresql
   ```

## Step 5: Create the Users Table

1. Connect to the database:
   ```bash
   psql -U sameedhasan -d sameeddb
   ```
2. Create a table named `users`:
   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100) UNIQUE NOT NULL,
       password VARCHAR(100) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Step 6: Insert Data into the Users Table

1. Insert a sample user into the `users` table:
   ```sql
   INSERT INTO users (name, email, password)
   VALUES ('John Doe', 'john@example.com', 'password123');
   ```
# Vehicle-Management-System
