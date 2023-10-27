All the credentials are in example.env with test postgreSQL server url.

Just rename example.env to .env and run

`npm run dev
`

- Comments:
  ** This is the Home page you see on browser. I am importing a Table component and TableEdit (which allow user to add user).
  ** This is front end part of the application
  ** look inside pages/api/user.ts file to see the backend part of the application where I am using Prisma ORM to connect to Postgres database and create a new user
  ** Look inside prisma folder to see the schema.prisma file where I am defining the database schema
  \*\* Look inside table and tableEdit component to see the front end part of the application where i am displaying the data and allowing user to add new new data
