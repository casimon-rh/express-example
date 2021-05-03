FROM registry.redhat.io/ubi8/nodejs-12
COPY package*.json ./
RUN npm i
COPY src src
EXPOSE 3000
CMD ["npm", "run", "start"]