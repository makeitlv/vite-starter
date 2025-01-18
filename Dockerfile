FROM node:23.6

WORKDIR /app

COPY package*.json .
COPY --link --chmod=755 docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]