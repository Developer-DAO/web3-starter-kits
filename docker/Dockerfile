FROM node:16.20

COPY . /opt/express

WORKDIR /opt/express

RUN yarn install

EXPOSE 8080

ENTRYPOINT [ "yarn", "start" ]