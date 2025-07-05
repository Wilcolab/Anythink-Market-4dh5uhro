# Simple JS Express Server

This is a minimal Express server scaffolded for development with nodemon and Docker support.

## Development

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Start the server with hot reload:
   ```bash
   yarn start
   ```
   The server will listen on [http://localhost:8001](http://localhost:8001).

## Docker

1. Build the Docker image:
   ```bash
   docker build -t js-server .
   ```
2. Run the container:
   ```bash
   docker run -p 8001:8001 js-server
   ```

The server will be available on port 8001.
