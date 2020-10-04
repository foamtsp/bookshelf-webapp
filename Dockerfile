# # base image
FROM node:alpine


# Create app directory
WORKDIR /usr/src/app/frontend
# Install app dependencies
COPY package*.json ./

# RUN npm install --production
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
