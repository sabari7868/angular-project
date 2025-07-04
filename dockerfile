# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the app
COPY . .
RUN npm run build --prod

# Stage 2: Serve with minimal static server
FROM node:18-alpine

# Install http-server globally
RUN npm install -g http-server

WORKDIR /app

# Copy only the build output from the previous stage
COPY --from=builder /app/dist/angular-frontend .

# Expose port 8080 to access the app
EXPOSE 4201

# Serve the app on port 8080
CMD ["http-server", "-p", "4201"]

