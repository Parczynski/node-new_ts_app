FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npm", "start" ]

## TODO: make multi-stage build to get rid of dev deps and build tools