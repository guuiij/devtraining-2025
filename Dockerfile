FROM postgres

RUN usermod -u 1000 postgres

COPY .docker/initdb /docker-entrypoint-initdb.d/
