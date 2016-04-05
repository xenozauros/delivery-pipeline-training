# Logs Aggregation


* setup ELK 
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
sudo docker run --name=box-elastic -d -it -v /etc/hosts:/etc/hosts devopsru/training-elastic
# open http://box-elastic.docker:9200/_plugin/kopf
curl http://box-elastic.docker:9200/?pretty


# sample data
# https://github.com/ropensci/elastic_data

sudo docker run --name box-kibana -d -it -v /etc/hosts:/etc/hosts -e ELASTICSEARCH_URL=http://box-elastic:9200  devopsru/training-kibana
# open http://box-kibana.docker:5601
```

curl -L -O https://download.elastic.co/beats/filebeat/filebeat_1.1.2_amd64.deb
sudo dpkg -i filebeat_1.1.2_amd64.deb
sudo vim /etc/filebeat/filebeat.yml
    
