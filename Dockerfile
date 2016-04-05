FROM ubuntu:15.10
MAINTAINER niquola

RUN apt-get update && apt-get install -y openssh-server python-apt
RUN apt-get install -y openjdk-8-jdk
RUN apt-get install -y nodejs
RUN locale-gen en_US.UTF-8
RUN update-locale LANG=en_US.UTF-8
RUN apt-get install -y postgresql
RUN apt-get -y install sudo
RUN apt-get -y install python-psycopg2 libpq-dev
RUN apt-get -y install npm
RUN wget -qO - http://download.opensuse.org/repositories/home:/laszlo_budai:/syslog-ng/Debian_8.0/Release.key | sudo apt-key add -
RUN echo "deb http://download.opensuse.org/repositories/home:/laszlo_budai:/syslog-ng/Debian_8.0 ./" > /etc/apt/sources.list.d/syslog-ng-obs.list
RUN apt-get update
RUN apt-get -y install syslog-ng-core syslog-ng-mod-riemann

RUN mkdir /root/.ssh
ADD secure/id_rsa.pub /root/.ssh/
RUN cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys

RUN mkdir /var/run/sshd && chmod 0755 /var/run/sshd

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
