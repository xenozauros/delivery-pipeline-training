# Monitoring

intro about prometheus

* setup prometeus
* metrics from docker
* metrics from aws
* metrics from app
* dashboards & search by grafana


Start prometheus and grafana

```
sudo docker run -tid -p 9090:9090 -v [PATH TO REPO]/steps/11-monitoring/prometheus.yml:/etc/prometheus/prometheus.yml -v /etc/hosts:/etc/hosts  prom/prometheus
sudo docker run -d   -p 3000:3000 -v /etc/hosts:/etc/hosts --name=box-grafana   grafana/grafana

```
