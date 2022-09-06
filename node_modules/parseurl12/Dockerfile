FROM alpine:latest

ENV USERNAME=user
ENV USERID=1000

RUN apk add --update nodejs npm
RUN addgroup -g $USERID -S $USERNAME
RUN adduser -h /home/$USERNAME -g "" -s /bin/sh -G $USERNAME -S -D -u $USERID $USERNAME
