# Node v20 Project-Model
Esse project model tem como objetivo utilizar as novas features do node.js para abandonar dependências.

## Porque um novo project model?
1. O Node.js utilizado nos projetos Minu é da versão 14, com o sistema de módulos do Node.js (CJS), não aproveita das últimas features do runtime como dynamic imports, ES Modules, novas APIs e etc.
2. O uso de algumas dependências se fez desnecessário graças a novas APIs e funcionalidades do Node.js

### Performance
O uso de frameworks como express.js pode causar lentidão como demonstrado nesse benchmark:
https://medium.com/deno-the-complete-reference/the-hidden-cost-of-using-framework-express-vs-native-http-servers-ed761a5cfc4c

O impacto na performance na maioria dos casos é de 50% de lentidão para o express.js.

Mas claro que não podemos negar a bela DX no uso do framework express. Como alternativa temos o fastify.js, que apresenta apenas 5% de lentidão quando comparado ao Node.js puro.

Eu criei dois apps dentro da pasta `server`. Um feito puramente com node.js e outro com express.js

O Node.js apresentou resultados superiores ao express.js na ordem de 2 à 3 vezes. A discrepância é ainda maior na versão 14 (versão que a minu utiliza atualmente).

### Novo test runner
O node.js 20 trouxe um test runner, parecido com o jest e o mocha. Isso nos traz a chance de abandonar também algumas dependências em favor de uma API nativa.

Veja o [exemplo](index.test.js).