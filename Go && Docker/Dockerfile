FROM node:8.9.3

RUN apt-get update \
  && apt-get install -y nginx

WORKDIR /app

COPY . /app

EXPOSE 80

RUN npm install \
  && npm run build \
  && cp -r dist/* /var/www/html \
  && rm -rf /app

# 以前台方式运行 nginx
RUN ["nginx", "-g", "daemon off;"]