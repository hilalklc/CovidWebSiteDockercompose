# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app
RUN npm run build

# Set the environment variable
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
