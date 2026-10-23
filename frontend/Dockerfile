FROM node:22-alpine
RUN npm install -g pnpm@11
WORKDIR /app
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile || pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]
