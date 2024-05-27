# Setup Docker

### Passo a passo
Clone Repositório
```sh
git clone https://github.com/stanleywodson/G4F-FRONTEND.git
```

Caso não tenha mudado o nome do arquivo acesso
```sh
cd G4F-FRONTEND/
```

Suba os containers do projeto
```sh
docker compose up -d
```

Acessar o projeto
[http://localhost:3000](http://localhost:3000)

# Sem Docker

Para utilizar sem docker remova node_modules caso haja
```sh
rm -rf node_modules/
```
excute:
```sh
npm install
```

```sh
npm run dev
```
