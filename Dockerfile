FROM node

WORKDIR /app 

COPY package.json . 

COPY package-lock.json . 

RUN npm install 

COPY . . 

EXPOSE 3500 

CMD [ "node","index.js" ]
