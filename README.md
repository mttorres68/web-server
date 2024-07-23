# web-server
* Consiste na leitura de arquivos, providos da saida de uma OLT. Com informações sobre as ONUs.


# Tecnologias Utilizadas
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

# Como rodar o projeto utilizando docker ✅

### Crie um arquivo docker-compose.yml
```
version: "3.8"

services:
  backend:
    image: righttorers/backend:1.0
    ports:
      - 3000:3000

    volumes:
      - backend:/home/backend

  webserver:
    image: righttorers/web-server:1.0

    ports:
      - 4000:4000

    volumes:
      - webserver:/homer/webserver

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: 'root'
      MYSQL_DATABASE: 'db'
      MYSQL_USER: 'password'
      MYSQL_ROOT_HOST: '%'
    
    ports:
      - '3306:3306'
    
    expose:
      - '3306'

    volumes:
      - dbdata:/var/lib/mysql
    
volumes:
  dbdata:
  backend:
  webserver:
```
### Execute
```
docker-compose up -d
```


