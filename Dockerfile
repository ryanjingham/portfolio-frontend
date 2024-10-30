FROM node:20.9.0

WORKDIR /Front-end

COPY package*.json ./
RUN npm install

COPY . .

# Build the app for production
RUN npm run build

# Install a simple static server
RUN npm install -g serve

# Serve the build output
CMD ["serve", "-s", "dist", "-l", "5173"]

# Expose the port the app runs on
EXPOSE 5173