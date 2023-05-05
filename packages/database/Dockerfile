FROM postgres:15

ENV POSTGRES_PASSWORD='testpasswd'

ADD ./sql/schema.sql /docker-entrypoint-initdb.d/

