# Use image node:16.14-alpine
FROM node:16.14-alpine

# Change directory to /src
WORKDIR /src

# Copiar os package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependências Node
RUN npm i

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001

# Inicializar
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]