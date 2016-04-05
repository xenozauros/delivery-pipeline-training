# Logs Aggregation

* setup ELK (ElasticSearch Logstash Kibana)
* integrate app into ELK
* nginx logs
* postgres logs
* dashboard & search

from https://github.com/lmenezes/elasticsearch-kopf
from https://github.com/docker-library/docs/tree/master/elasticsearch
from https://github.com/docker-library/docs/tree/master/kibana


## Run ES with Kibana

```
sudo docker run --name box-elastic -p 9200:9200 -d elasticsearch

curl http://localhost:9200
# open http://localhost:9200/_plugin/kopf
# sample data
# https://github.com/ropensci/elastic_data

sudo docker run --name=box-kibana -p 5601:5601 --link box-elastic:elasticsearch -d  kibana
# open http://localhost:5601
```
