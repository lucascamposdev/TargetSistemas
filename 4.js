/*
    # Explicação:
    -------------

    1) totalRevenue: 
        - Adiciona os values das keys do objeto revenuesByState, á um array utilizando Object.values()
        - Com isso é permitido a utilização do .reduce para unir todos os valores e obter um total

    2) for in:
        - Para cada Estado
        - Divide seu revenue pelo totalRevenue
        - Multiplica por 100, obtendo a porcentagem
        - Formata para duas casas decimais
        - Exibe o valor em tela
*/

const revenuesByState = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
const totalRevenue = Object.values(revenuesByState)
    .reduce((sum, value) => sum + value, 0);


for (let state in revenuesByState) {
    const stateRevenue = revenuesByState[state];
    const percentage = ((stateRevenue / totalRevenue) * 100).toFixed(2);
    console.log(`${state}: ${percentage}%`);
}
  