install docker: http://docs.docker.com/mac/step_one/
open boot2docker.app
cd to project directory
docker build -t mean .
docker run --name db -d mongo
docker run -p 3000:3000 --link db:db mean
go to http://192.168.59.103:3000/
