# Use an existing docker image as a base
FROM alpine

# Run some commands
RUN apk add --update redis

# Specify the default start command
CMD [ "redis-server" ]