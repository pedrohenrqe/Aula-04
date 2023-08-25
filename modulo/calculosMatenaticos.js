function calculadora (numero1, numero2, tipoCalculo){

    // Recebendo os valores dos argumentos da função em variáveis locais
    let valor1 = numero1;
    let valor2 = numero2;
    let operacao = tipoCalculo;
    let resultado;

    // Versão 2.0 - Utilizando Switch Case
    switch (operacao) {
        case "SOMAR":
            case "+":
            resultado = valor1 + valor2;
            break;
        case "SUBTRAIR":
            case "-":
            resultado = valor1 - valor2;
            break;
        case "MULTIPLICAR":
            case "*":
            resultado = valor1 * valor2;
            break;
        case "DIVIDIR":
            case "/":
            if (valor2 == 0)
            console.log('ERRO: Opção de cálculo inválida');
            else
            resultado = valor1 / valor2;
        default:
            console.log('ERRO: É obrigatório escolher apenas as operações listadas.')
            break;
    }

    if (resultado != undefined)
        return Number(resultado).toFixed(2);
    else 
        return false;

}
module.exports={
    calculadora
}
