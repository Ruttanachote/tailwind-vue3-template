# build stage
FROM node:18.17.0-alpine as build-stage
# Node ENV
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=8192
# Project ENV

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
