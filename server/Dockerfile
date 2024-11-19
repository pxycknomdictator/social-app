# stage 1
FROM node:22 AS builder

WORKDIR /app

COPY package.*json ./

RUN npm install

COPY . .

# stage 2
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app .

COPY .env .

ENV DATABASE_URL="mongodb://mongodb:27017"

EXPOSE 3000

CMD [ "npm", "run", "start" ]