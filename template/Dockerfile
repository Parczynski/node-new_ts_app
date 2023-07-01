FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

RUN groupadd -r www-data && useradd -g www-data nodeuser

RUN chown -R nodeuser.www-data /app

USER nodeuser

EXPOSE 3000

CMD ["npm", "start" ]

## TODO: make multi-stage build to get rid of dev deps and build tools