# Monitoring

intro about prometheus

* setup prometeus
* metrics from docker
* metrics from aws
* metrics from app
* dashboards & search by grafana


Install prometeus from docker

```
sudo  docker run -tid -p 9090:9090 -v [LOCAL PATH TO REPO]/delivery-pipeline-training/steps/11-monitoring/prometheus.yml:/etc/prometheus/prometheus.yml   prom/prometheus


```
