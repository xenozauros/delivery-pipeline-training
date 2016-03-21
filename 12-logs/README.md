# Logs Aggregation


* setup ELK 
* integrate app into ELK
* nginx logs
* postgres logs
* dashboard & search


from https://github.com/lmenezes/elasticsearch-kopf
from https://github.com/docker-library/docs/tree/master/elasticsearch
from https://github.com/docker-library/docs/tree/master/kibana



## Install ES


```
d run --name=elastic -it elastic
docker inspect -f '{{ .NetworkSettings.IPAddress }}' elastic

open http://172.17.0.87:9200/_plugin/kopf

curl 'http://172.17.0.85:9200/?pretty'


# sample data
# https://github.com/ropensci/elastic_data

docker run --name some-kibana -e ELASTICSEARCH_URL=http://some-elasticsearch:9200 

docker run -it --rm logstash logstash -e 'input { stdin { } } output { stdout { } }'

docker run -it --name=logstash --link=elastic:elasticsearch -v "$PWD":/config-dir logstash logstash -f /config-dir/logstash.conf

```

curl -L -O https://download.elastic.co/beats/filebeat/filebeat_1.1.2_amd64.deb
sudo dpkg -i filebeat_1.1.2_amd64.deb
sudo vim /etc/filebeat/filebeat.yml
    
