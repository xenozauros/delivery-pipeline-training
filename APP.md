# Continuous Delivery


## Run app
```
npm install
source env.sh
# Dev run 
npm run start-dev
# Prod run 
npm run start
```

## Clone project
## Read README

alias d='sudo docker'

Build Dockerfile

```
d build -t cd .
d run --name cd-1 -d -t cd

eval $(ssh-agent)
ssh-add secure/id_rsa.pub
```


```
export ANSIBLE_CONFIG='ops/ansible.cfg'
ansible all -i ops/hosts -m ping -vvvv
ansible all -i ops/hosts -a 'uname -a'
```

## Heroku

```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku login
heroku create
heroku logs
heroku addons:create heroku-postgresql:hobby-dev
heroku logs
```

## Heroku & Travis

```
travis encrypt $(heroku auth:token) --add deploy.api_key
```


## Flyway

```
flyway -configFile=`pwd`/conf/flyway.conf -locations=filesystem:`pwd`/sql migrate
```
