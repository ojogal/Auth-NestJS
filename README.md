## Installation
```
npm install
```
## Configuration
Setup variables in /src/common/envs/development.env
## Running the app
```
# development
npm run start
```
```
# watch mode
npm run start:dev
```
```
# production mode
npm run start:prod
```
## Register
```
curl -X POST http://localhost:4001/auth/register -H "Content-Type: application/json" -d '{"firstName": "Alexandr", "lastName": "Ojog", "email": "ojog.al@gmail.com", "password": "12345678"}'
```
## Login
```
curl -X POST http://localhost:4001/auth/login -H "Content-Type: application/json" -d '{"email": "ojog.al@gmail.com", "password": "12345678"}'
```
Server's resopnse will be a token. You can save it in a variable:
```
export TKN="YOUR TOKEN HERE"
```
## Refresh
```
curl -X POST http://localhost:4001/auth/refresh -H "Content-Type: application/json" -H "Authorization: Bearer $TKN"
```
## Update
```
curl -X PUT http://localhost:4001/user/name -H "Content-Type: application/json" -H "Authorization: Bearer $TKN" -d '{"firstName": "Nassim", "lastName": "Taleb"}'
```