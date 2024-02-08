## Install Dependencies

```bash
   yarn add class-validator class-transform cors express morgan mysql typeorm typeorm-naming-strategies typescript dotenv cross-env
   yarn add @types/cors @types/express @types/morgan concurrently nodemon --dev

```

## Typescript init

```bash
   yarn tsc --init
```

## Create migration init

```bash
   yarn run migration:gen -- src/migrations/init-db
   yarn run migration:run
```
