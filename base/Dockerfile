ARG PY_VERSION=3.11-slim-buster

FROM python:${PY_VERSION} as base

LABEL author="itxve" \
  email="itxve.com"

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ARG flag

FROM base as client
RUN echo "client: $flag"
CMD [ "python" ,"client.py"]


FROM base as server
RUN echo "server: $flag"
CMD [ "python" ,"server.py"]


FROM base as all
RUN echo "all: $flag"
COPY --from=client /app/client.py /app/cout/
COPY --from=server /app/server.py /app/sout/

