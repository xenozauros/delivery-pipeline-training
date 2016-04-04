## Continuous Delivery

> Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles,
> ensuring that the software can be reliably released at any time.[1] It aims at building,
> testing, and releasing software faster and more frequently. The approach helps reduce the cost,
> time, and risk of delivering changes by allowing for more incremental updates to applications in production.
> A straightforward and repeatable deployment process is important for continuous delivery.


* The process for releasing/deploying software MUST be repeatable and reliable. This leads onto the 2nd principle…
* Automate everything! A manual deployment can never be described as repeatable and reliable (not if I’m doing it anyway!). You have to invest seriously in automating all the tasks you do repeatedly, and this tends to lead to reliability.
* If somethings difficult or painful, do it more often. On the surface this sounds silly, but basically what this means is that doing something painful, more often, will lead you to improve it, probably automate it, and this will eventually make it painless and easy. Take for example doing a deployment of a database schema. If this is tricky, you tend to not do it very often, you put it off, maybe you’ll do 1 a month. Really what you should do is improve the process of doing the schema deployments, get good at it, and do it more often, like 1 a day if needed. If you’re doing something every day, you’re going to be a lot better at it than if you only do it once a month.
* Keep everything in source control – this sounds like a bit of a weird one in this day and age, I mean seriously, who doesn’t keep everything in source control? Apparently quite a few people. Who knew?
* Done means “released”. This implies ownership of a project right up until it’s in the hands of the user, and working properly. There’s none of this “I’ve checked in my code so it’s done as far as I’m concerned”. I have been fortunate enough to work with some software teams who eagerly made sure their code changes were working right up to the point when their changes were in production, and then monitored the live system to make sure their changes were successful. On the other hand I’ve worked with teams who though their responsibility ended when they checked their code in to the VCS.
* Build quality in! Take the time to invest in your quality metrics. A project with good, targeted quality metrics (we could be talking about unit test coverage, code styling, rules violations, complexity measurements – or preferably, all of the above) will invariably be better than one without, and easier to maintain in the long run.
* Everybody has responsibility for the release process. A program running on a developers laptop isn’t going to make any money for the company. Similarly, a project with no plan for deployment will never get released, and again make no money. Companies make money by getting their products released to customers, therefore, this process should be in the interest of everybody. Developers should develop projects with a mind for how to deploy them. Project managers should plan projects with attention to deployment. Testers should test for deployment defects with as much care and attention as they do for code defects (and this should be automated and built into the deployment task itself).
* Improve continuously. Don’t sit back and wait for your system to become out of date or impossible to maintain. Continuous improvement means your system will always be evolving and therefore easier to change when needs be.

## CI

Problem:

* Работа над одной кодовой базой
* Болезненные merge
* Опасность сломать работающий функционал 

Solution:

* VCS as communication point (github)
* README driven (lean)
* standups
* chat (slack, hipchat)
* branching (only trunk vs feature branches)
* pre/post coordination (Coder Review vs Pair Programming)


Built-in Quality

* autotests 
  * built in quality (andon)
  * pyramid and where to start (DHH hangouts)
* green line (andon) - stop the line, if waste
* Visual Management

## Infrastructure

Problem:

* потребность в инфраструктуре для тестов, стэндов и продакшена
* ручное манипулирование
* огранниченный ресурс

Solution:

* virtualization
* as a code (amazon SDK, terraform)
* docker (platforms)
  * mesosphere
  * kubernetis

## Configuration Management

Problem:

* Manual setup & installation
* Сакральные знания (трамвайная зависимость)
* Воспроизводимость


Становится инструментом коммуникации между dev и ops.

Solutions:
  * NoOps
  * ansible basics???

## Builds & Deps

* Docker

## Staging

Problem:

Страшно деплоить на продакшен.
Нужно протестировать систему в целом.


Solution:

* automate everything
* deploy by push (by button)
* mocking external services (record/play)

## Deploy (fail forward, смелость)

Problem:

Как безболезненно деплоить.
Как деплоить большие приложения.
Как мигрировать схемы и много данных

Solution:

* migrations
* blue/green
* canary releases

## Monitoring (measure)

Problem:

Как узнать о том, что что-то пошло не так


Solution:

Прозрачность.

* monitoring
* audit (log aggregation)
* alerting
  
## Disaster Planing

* post mortem
* haos monkey
* backups
