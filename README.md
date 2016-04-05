# delivery-pipeline-training

[![Build Status](https://travis-ci.org/devops-ru/delivery-pipeline-training.svg?branch=master)](https://travis-ci.org/devops-ru/delivery-pipeline-training)


## Installation

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

source ~/.nvm/nvm.sh

git clone https://github.com/devops-ru/delivery-pipeline-training.git myapp
git submodule init && git submodule update

cd myapp

nvm use 0.5

npm install

npm run test

npm run start
```


## Deploy

```
heroku login
heroku create
heroku addons:create heroku-postgresql:hobby-dev
git push heroku master
```


## Continuous Delivery

```
sudo gem install travis -v 1.8.2 --no-rdoc --no-ri
# travis setup heroku
travis encrypt $(heroku auth:token) --add deploy.api_key
```
