# 1. Сборка
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

# Копируем всё, включая .env.production
COPY . .

# Явно укажем, что это production-сборка
ENV NODE_ENV=production

# Выполняем сборку (CRA автоматически возьмёт .env.production)
RUN npm run build

# 2. Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
