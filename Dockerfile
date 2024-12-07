# Fáze 1: Build klienta
FROM node:18 AS client-build
WORKDIR /app

# Kopírování balíčkovacích souborů a instalace závislostí
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm install --omit=dev

# Build produkční verze klienta
COPY client ./client
RUN npm run build

# Fáze 2: Sestavení a spuštění serveru
FROM node:18
WORKDIR /app

# Kopírování serverových závislostí a instalace
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm install --omit=dev

# Kopírování serverových souborů
COPY server ./server

# Kopírování zbuildovaných souborů klienta do serveru (pro obsluhu)
COPY --from=client-build /app/client/build ./server/public

# Nastavení prostředí
ENV NODE_ENV=production
ENV PORT=80

# Expozice portu
EXPOSE 80

# Spuštění serveru
CMD ["npm", "start"]
