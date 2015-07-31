# How to test mongodb locally
install mongo locally
brew update && brew install mongodb
cd to workspace
mongod --config /usr/local/etc/mongod.conf &
npm install && bower install
run gulp

# Set up mongodb heroku configs
Update conf/env/production.js
set db = process.env.MONGOLAB_URI assuming you are using heroku MONGOLAB addon
copy mongolab uri from console
note replace the username and password
example: mongodb://<dbuser>:<dbpassword>@ds033469.mongolab.com:33469/heroku_0ms8k693
heroku config:set MONGOLAB_URI=<uri>
