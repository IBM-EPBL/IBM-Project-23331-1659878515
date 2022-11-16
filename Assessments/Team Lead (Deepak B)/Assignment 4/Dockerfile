FROM python:3.10.4
WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8010
CMD ["gunicorn", "--bind", "0.0.0.0:8010", "app:app"]
