# Choose the Image which has Node installed already
FROM node:lts-alpine

# Make the 'app' folder the current working directory
WORKDIR /app

# Copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Install project dependencies
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
