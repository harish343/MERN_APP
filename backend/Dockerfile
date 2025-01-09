FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

# Copy the rest of the application files
COPY . .

# Expose the desired port
EXPOSE 3000

# Use nodemon to start the application in development mode
CMD ["nodemon", "index.js"]
