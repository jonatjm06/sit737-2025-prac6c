# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 5000

# Define the command to run the application
CMD ["node", "server.js"]
