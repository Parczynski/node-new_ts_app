# DEPENDENCIES LAYER
FROM        node:20-alpine AS deps
WORKDIR     /app
COPY        package.json package-lock.json ./
RUN         npm ci



# BUILDER LAYER
FROM        node:20-alpine AS builder
WORKDIR     /app
COPY        --from=deps /app/node_modules ./node_modules
COPY        . .
RUN         npm run build


# ACTUAL IMAGE
FROM        node:20-alpine as runner
WORKDIR     /app
COPY        --from=builder /app/build ./build
COPY        package.json package-lock.json ./
RUN         npm i --omit=dev
RUN         chown -R node:node /app
USER        node
EXPOSE      3000
CMD         ["npm", "start" ]