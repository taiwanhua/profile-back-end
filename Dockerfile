From node:12.16.3

COPY ./ /app
WORKDIR /app

EXPOSE 4000

RUN npm install && npm build

CMD node -r dotenv/config.js dist/index.js dotenv_config_path=./.env.prod