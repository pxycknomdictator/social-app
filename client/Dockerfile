# stage 1
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# stage 2
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app .

COPY .env .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]