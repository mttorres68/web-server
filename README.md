# Web-Server 🌐
* Consiste na leitura de arquivos, providos da saída de uma OLT. Com informações sobre as ONUs.


# Tecnologias Utilizadas 🛠️
<table>
  <tr>
    <td>NodeJs</td>
    <td>Vite</td>
    <td>React</td>
    <td>react-router-dom</td>
  </tr>
  <tr>
    <td>v20.12.2</td>
    <td>V5.3.4</td>
    <td>V18.3.1</td>
    <td>V6.25.1</td>
  </tr>
</table>

# Como rodar o projeto ✅
### Para baixar o projeto, clone-o diretamente do git executando o seguinte comando
```
git clone https://github.com/mttorres68/web-server.git
```

### Instale as dependências 
```
npm install
```

#### Rodar o projeto
```
npm run dev
```

# Como rodar o projeto utilizando docker 🔧

### Crie um arquivo docker-compose.yml
```
services:
  mysql-zeus:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: "root"
      MYSQL_DATABASE: "db"
      MYSQL_USER: "password"
      MYSQL_ROOT_HOST: "%"
    ports:
      - "3306:3306"
    expose:
      - "3306"
    volumes:
      - mysql-volume-zeus:/var/lib/mysql

  api:
    container_name: api-zeus
    image: righttorers/backend:1.0
    restart: always
    ports:
      - 8000:8000
    depends_on:
      - mysql-zeus

  webserver:
    container_name: webserver-zeus
    image: righttorers/web-server:1.0
    volumes:
      - webserver-volume-zeus:/var/www/html
    depends_on:
      - api

  nginx:
    container_name: nginx-zeus
    image: righttorers/nginx:1.0
    ports:
      - 80:80
    volumes:
      - webserver-volume-zeus:/var/www/html
    depends_on:
      - mysql-zeus
      - api
      - webserver

volumes:
  mysql-volume-zeus:
  webserver-volume-zeus:
```
### Executar docker-compose
```
docker compose up -d
```
# Backend 🔙
* Consiste na leitura de arquivos, providos da saída de uma OLT. Com informações sobre as ONUs.


# Tecnologias Utilizadas 🛠️
<table>
  <tr>
    <td>NodeJs</td>
    <td>Express</td>
    <td>bcrypt</td>
    <td>cors</td>
    <td>jsonwebtoken</td>
    <td>mysql2</td>
    <td>dotenv</td>
    <td>nodemon</td>   
    
  </tr>
  <tr>
    <td>v20.12.2</td>
    <td>V4.19.2</td>
    <td>V5.1.1</td>
    <td>V2.8.5</td>
    <td>V9.0.2</td>
    <td>V3.10.3</td>
    <td>V16.4.5</td>
    <td>V3.1.4</td>
    
  </tr>
</table>

# Como rodar o projeto ✅
### Para baixar o projeto, clone-o diretamente do git executando o seguinte comando
```
git clone https://github.com/mttorres68/backend.git 
```

### Instale as dependências 
```
npm install
```

#### Rodar o projeto utilizando nodemon
```
npm run dev
```

#### Rodar o projeto sem utilizar o nodemon
```
npm run start
```




