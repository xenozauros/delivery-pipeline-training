# Logs Aggregation

* setup ELK (ElasticSearch Logstash Kibana)
* integrate app into ELK
* nginx logs
* postgres logs
* dashboard & search


from https://github.com/lmenezes/elasticsearch-kopf
from https://github.com/docker-library/docs/tree/master/elasticsearch
from https://github.com/docker-library/docs/tree/master/kibana


Filebeat https://www.elastic.co/guide/en/beats/filebeat/current/index.html

## Docker compose


## Run ES with Kibana

```
sudo docker run --name=box-elastic -p 9200:9200 -v /etc/hosts:/etc/hosts -d devopsru/training-elastic-image
curl http://box-elastic.docker:9200
# open http://box-elastic.docker:9200/_plugin/kopf

# sample data
# https://github.com/ropensci/elastic_data


sudo docker run --name=box-kibana -p 9300:5601 -d -v /etc/hosts:/etc/hosts -e ELASTICSEARCH_URL=http://box-elastic.docker:9200 devopsru/training-kibana-image

# open http://box-kibana.docker:5601   or http://localhost:9300
```

curl -L -O https://download.elastic.co/beats/filebeat/filebeat_1.1.2_amd64.deb
sudo dpkg -i filebeat_1.1.2_amd64.deb
sudo vim /etc/filebeat/filebeat.yml
    
