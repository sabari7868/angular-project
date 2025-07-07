FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose default Angular dev server port
EXPOSE 4200

# Run ng serve --host 0.0.0.0 so container is accessible from outside
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]

