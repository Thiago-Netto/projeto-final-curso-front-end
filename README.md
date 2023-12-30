# projeto-final-curso-front-end
Projeto de bestiário do jogo Monster Hunter World

# Json-server
npm init -y
npm install json-server

criar arquivo .gitignore e digitar o código abaixo
node_modules/

criar fake api no terminal
npx json-server --watch database.json

após criar a  database.json é possível trocar o nome e rodar com o código acima modificado
npx json-server --watch novonome.json

# Compilar Sass
abrir terminal 
cd pasta scss
sass --watch nomedoarquivo.scss:nomedoarquivo.css