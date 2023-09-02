FROM node:hydrogen
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
EXPOSE 3000
CMD [ "serve","-s","dist/contact-list-app"]