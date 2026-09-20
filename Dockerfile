FROM node:20-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

EXPOSE 4173

CMD ["sh", "-c", "npx vite preview --host 0.0.0.0 --port ${PORT:-4173}"]
