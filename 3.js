/*
    # Explicação:
    -------------

    1) readFile :
        - Lê o arquivo dados.json localizado na pasta (transformando-o em uma string)
    2) JSON.parse(data):
        - Faz com que esse arquivo volte a ser um json manipulável 

    3) minRevenue:
        - Filtra o array removendo os dias que obtiveram revenue igual ou menor a 0
        - Mapeia o array o transformando em um array de values
        - Operador spread "..." faz com que os valores sejam passados individualmente ao método Math.min()
        - Math.min() retorna o menor valor recebido

    4) maxRevenue:
        - Funciona da mesma forma que o minRevenue, apenas alterando Math.min() por Math.max()

    5) daysAboveAverage:
        - Para calcular os Dias Acima da Média precisamos saber o valor da Média
        - Para calcular o valor da Média:
            - Revenue Total: realizamos a soma de todas as revenues
            - Dias Válidos: removemos dias que obtiveram valor igual ou menor a 0
            - Média: dividimos o Revenue Total pelos Dias Válidos do mês
        - Com isso realizamos um mapeamento conferindo dias que contenham valor MAIOR que a Média
        - Por fim, contamos quantos valores passaram por essa condição
*/

const fs = require('fs');

fs.readFile('./dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const monthlyRevenue = JSON.parse(data); 

  const minRevenue = Math.min(...monthlyRevenue
    .filter(day => day.value > 0)
    .map(day => day.value));

  const maxRevenue = Math.max(...monthlyRevenue
    .filter(day => day.value > 0)
    .map(day => day.value));

  const totalRevenue = monthlyRevenue.filter(day => day.value > 0)
  .reduce((sum, day) => sum + day.value, 0);

  const daysWithRevenue = monthlyRevenue
  .filter(day => day.value > 0).length;

  const averageRevenue = totalRevenue / daysWithRevenue;
  const daysAboveAverage = monthlyRevenue.filter(day => day.value > averageRevenue).length;

  console.log(`O menor valor de faturamento ocorrido em um dia do mês: R$ ${minRevenue}`);
  console.log(`O maior valor de faturamento ocorrido em um dia do mês: R$ ${maxRevenue}`);
  console.log(`Dias em que o valor de faturamento diário foi superior à média mensal: ${daysAboveAverage}`);
});
