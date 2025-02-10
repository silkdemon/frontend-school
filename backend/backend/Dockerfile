FROM gradle:jdk23-noble AS build
WORKDIR /app
COPY . .
RUN gradle build --no-daemon

FROM openjdk:25-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]