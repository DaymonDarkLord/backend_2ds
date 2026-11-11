// São blocos de código reaproveitáveis
// Remete a alguma ação ou procedimento (reaplicável)
// exige nomes auto-explicativos

function montarCarros(pecas, regras, documentos, montador){
    return{ // expor os valores da função para reaproveitamento
        itens: [pecas, regras, documentos, montador],
        montar: function(){console.log('Carro obtido com sucesso\\o/')}
    }
} // TODOS OS DADOS SERÃO DESCARTADOS
montarCarros(
    ['motor', 'portas', 'rodas'], 
    'como montar um Monza',
    'Projeto para montar um Monza',
    'Seu Zé'
)