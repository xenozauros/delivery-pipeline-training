createuser -s crudtest
psql postgres -c 'create database crudtest'
psql postgres -c "ALTER ROLE crudtest WITH PASSWORD 'crudtest';"
