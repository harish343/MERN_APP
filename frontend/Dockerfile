# Stage 1: Build the Vite app
FROM node:20 AS builder
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you're using Yarn)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the build output from the builder stage to Nginx's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
