FROM node:20.9.0

WORKDIR /Front-end

COPY . . 

RUN npm install

EXPOSE 5173

CMD ["npm", "start"]

## DOESNT WORK. REFIT FRONTEND DIRECTORIES TO LOOK LIKE ECONX