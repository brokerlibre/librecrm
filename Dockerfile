from node:lts-alpine

# install simple http server for serving static content
#RUN npm install -g http-server

workdir /libre

copy package*.json ./

run yarn install

copy . /libre
