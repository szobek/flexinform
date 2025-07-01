FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to Nginx HTML directory
COPY --from=builder /app/dist/flexinform/browser /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
