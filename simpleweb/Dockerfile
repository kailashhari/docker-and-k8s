# specify the base image
FROM node:21-alpine

WORKDIR /usr/app

# run commands
COPY ./package.json ./
RUN npm install
COPY ./ ./

# specify the start command
CMD [ "npm", "start" ]