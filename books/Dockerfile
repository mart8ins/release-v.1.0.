FROM openjdk:17
LABEL authors="mart8"
EXPOSE 8081
VOLUME /tmp
COPY out/artifacts/books_jar/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]