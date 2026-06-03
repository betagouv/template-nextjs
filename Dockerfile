ARG NODE_VERSION=24-alpine@sha256:2bdb65ed1dab192432bc31c95f94155ca5ad7fc1392fb7eb7526ab682fa5bf14

# Install dependencies only when needed
FROM node:$NODE_VERSION AS builder
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package-lock.json package.json ./
RUN npm ci
COPY . .

ARG PRODUCTION
ENV PRODUCTION $PRODUCTION
ARG GITHUB_SHA
ENV GITHUB_SHA $GITHUB_SHA
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL $NEXT_PUBLIC_SITE_URL
# Disable nextjs telemetry
ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV production
ENV NEXT_PUBLIC_BASE_PATH ""

WORKDIR /app

RUN if [ -z "$PRODUCTION" ]; then \
    echo "Overriding .env for staging"; \
    cp .env.staging .env.production; \
    fi && \
    npm run build

# Production image, copy all the files and run nginx
FROM ghcr.io/socialgouv/docker/nginx:sha-1d70757 AS runner

COPY --from=builder /app/out /usr/share/nginx/html

