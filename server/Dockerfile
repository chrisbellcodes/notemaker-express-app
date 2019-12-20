FROM node: latest
RUN mkdir -p /usr/src/note-app
WORKDIR /usr/src/note-app
COPY package.json /usr/src/note-app/
RUN npm install
COPY . /usr/src/note-app
EXPOSE 3000
CMD [ “npm”, “start” ]
