# Problem Statement


## Triangle


```
          T
          /\
         /  \
        /    \
      Q--------$
```
## LEAN

Принципы TPS:

* Непрерывность улучшений (развития)
  * Challenge - принятие вызовов и движение к мечте
  * Kaizen - непрерывное развитие
  * Genchi Genbutsu - пойди и увидь своими глазами, решения на базе фактов увиденных лично
* Уважение к людям
  * Respect
  * Teamwork
* Философия долгосрочной перспективы
  * Принятия решений с учетом долгосрочной перспективы
* Правильный процесс приводит к правильным результатам
  * Создания непрерывного потока для улучшения
  * Pull-система (вытягивания)
  * Выравнивание процесса (работай как черепаха, а не как заяц)
  * Культура остановки производства, для устранения проблемы
  * Стандартизация
  * Визуализация
* Приносите пользу организации развивая людей и подрядчиков
  * Ставка на естесственное лидерство
  * Способствование развитию людей разделяющих философию компании
  * Уважение к внешнему миру (партнеры, среда и т.д.)
* Непрерывно находите и решайте корневые проблемы, тем самым заставляя организацию учиться
  * Genchi Genbutsu - пойди и увидь своими глазами, решения на базе фактов увиденных лично
  * Принятие решений на основании “консенсуса”
  * Развитие через регулярную рефлексию (ретроспективу)


##  Delivery cycle evolution

* 1990-2000 - years
* 2000-2010 - month/weeks
* 2010-       days/hours

Leaders:

* Google
* Netflix
* Esty
* ...

## Natural devops in startups & small cross-functional teams

В маленьких о


## Metodology Hx


Ideas ------------------> Business -------> Dev -------------> Test -----------> Ops
      lean startup                 agile          ci/autotests       devops/CD


## DevOps Hx

История:
* 1948-1975      Toyota Production System (TPS)
* 1986           Статья Такеучи/Нонака (первая весточка о Scrum)
* 1990           Lean Manufacturing (введен в обращение термин)
* 1995           SCRUM methodology (Jeff Sutherland & Ken Schwaber)
* 1996           Extreme Programming - XP (Kent Beck)
* 2001           Agile Manifesto
* 2003           Lean Software Development (Mary & Tom Poppendieck)
* 2005           The Visible Ops Handbook (Book by Gene Kim)
* 2006           The Deployment Production Line (Book by Jez Humble)
* 2009           DevOpsDays (Patrick Debois)
* 2010           Continuous Delivery (Jez humble)
* 2010           Kanban (Book by David J. Anderson)
* 2013           Phoenix Project (Gene Kim)
* 2014           State of DevOps Report (Gene Kim & Jez Humble)

Идеологи DevOps / Continuous Delivery
Gene Kim (realgenekim.me) - Visible Ops & State of DevOps
Patrick Debois (jedi.be) - DevOpsDays
Jez Humble (continuousdelivery.com) - Continuous Delivery


## CALM (culture, automate, LEAN, measure)

* **C** – Culture
* **A** – Automation
* **L** – Lean
* **M** – Measurement
* **S** – Sharing

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


## Real View


```
                        [design]
                       ----------
                      /    |     \
              [idea] /     |      \ [implement]
                    /              \
            [system] --> [team] <---[]
                    \      ^       /
            [deploy] \     |      / [implement]
                      \    |     /
                       ----------
                        [test]
```


## New dementions

* Flow
* Learning Organization
* Improvments
