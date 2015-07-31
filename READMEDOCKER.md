docker build -t mean .
docker run --name db -d mongo
docker run -p 3000:3000 --link db:db mean
http://192.168.59.103:3000/
