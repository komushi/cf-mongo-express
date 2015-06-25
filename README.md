Welcome to cf-mongo-express
===================

Overview
-------------
This requires [mongo-express](https://github.com/andzdroid/mongo-express) - Web-based MongoDB admin interface written with Node.js and express.
Cloud Foundry deployment wrapper.

----------
Get started
-------------
Clone this repository.
```
git clone https://github.com/komushi/cf-mongo-express.git
cd cf-mongo-express
```

Edit the manifest.yml regarding the mongodb service name.

Clone this repository.
```
git clone https://github.com/komushi/cf-mongo-express.git
cd cf-mongo-express
```

Remember to install [cf cli](https://github.com/cloudfoundry/cli/releases) first. Then, push the application:
```
cf push
```

You can access your app at test/test as credentials.
```
http://cf-mongo-express.<your-cf-app-domain>
```
