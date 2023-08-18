# About project

This is a project to simulate simple book store functionality. Front end is built on a [Next.js](https://nextjs.org/). It has dummy authentification using hardcoded conditional logic also using browsers localStorage for persistant data. This app is designed to send simple data (Book object with title and author) to [Java Spring Boot](https://spring.io/projects/spring-boot) backend what later is saved in Postgresql database. Home route loads all books stored in database (if there are any), pageination is in place (50 books per page). To add book in database user needs to authentificate with admin data (username: admin, password: admin). After login admin can add new books and see results.

## Getting Started Front End

First, run the development server:

```bash
cd ui

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started Back End

In current books folder is provided source code. To be sure about app running without problems on your device you need to do following:
* Downloud [Docker](https://www.docker.com/products/docker-desktop/) for your operating system
* You need to pull [postgres](https://hub.docker.com/_/postgres) image and [mart8ins/books](https://hub.docker.com/r/mart8ins/books) image
 
### Configuration for docker
* Create Docker network, run: docker network create booksnetwork
* Create database container, run: docker run --name postgresContainer --network booksnetwork -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
* Create app container, run: docker run -d -p 8081:8081 --name booksContainer --network booksnetwork -d mart8ins/books

After everyting is done, you should be able to open [http://localhost:3000](http://localhost:3000) and see app without data. Login with previously provided auth data and start adding data. 