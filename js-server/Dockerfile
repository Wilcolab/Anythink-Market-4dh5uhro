FROM node:14

WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn install --force --frozen-lockfile || yarn install --force
COPY . .
EXPOSE 8001

CMD [ "yarn", "start" ]

HEALTHCHECK --interval=5s --timeout=3s --start-period=5s --retries=3 CMD curl -f http://localhost:8001/ || exit 1
