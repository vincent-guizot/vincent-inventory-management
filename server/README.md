# server

## Database configuration with Sequelize

1. Membuat konfigurasi sequelize dan pg awal

```
npx sequelize-cli init
```

2. Setting `config.json`

3. Membuat database

```
npx sequelize-cli db:create
```

4. Membuat migration dan table

```
npx sequelize-cli model:generate --name User --attributes username:string,password:string,email:string,image:string,role:string

npx sequelize-cli model:generate --name Item --attributes name:string,category:string,price:integer,stock:integer,image:string,UserId:integer

```

5. Migrate dari migrations

```
npx sequelize-cli db:migrate
```
