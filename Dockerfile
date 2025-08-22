# Use Node.js LTS
FROM node:22-alpine

# Defina diretório de trabalho
WORKDIR /app

# Copie package.json e package-lock.json
COPY package*.json ./

# Instale dependências
RUN npm install

# Copie o restante do código
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Exponha a porta que o backend vai rodar
EXPOSE 3000

# Variável de ambiente (opcional, pode usar .env)
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", "src/server.js"]
