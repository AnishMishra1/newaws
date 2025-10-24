# Use official Node.Js image
From node:18

#Set working directory inside container
WORKDIR / app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy all backend files
COPY . . 

#Expose port
EXPOSE 5000

CMD ["node", "server.js"]