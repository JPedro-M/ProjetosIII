function executar() {
    var nome = document.getElementById("nome").value;
    var genero = document.querySelector("input[name=genero]:checked").value;
    var data = document.getElementById("data").value;
    var salario = document.getElementById("bruto").value;
    var hoje = new Date();
    var anoA = hoje.getFullYear();
    var anoN = data.substring(0, 4);
    var idade = anoA - anoN;
    var liq;
    var inss;
    var ir;

    if(salario <= 1212){
        inss = salario * 0.075;
    }else if(salario >= 1212.01 && salario <= 2427.35){
        inss = parseFloat(salario * 0.09);
    }
    else if(salario >= 2427.36 && salario <= 3641.03){
        inss = parseFloat(salario * 0.12);
    }
    else if(salario >= 3641.04){
        inss = parseFloat(salario * 0.14);
    }

    if(salario <= 1903.98){
        ir = 0;
    }else if(salario >= 1903.99 && salario <= 2826.65){
        ir = parseFloat(salario * 0.075);
    }else if(salario >= 2826.66 && salario <= 3751.05){
        ir = parseFloat(salario * 0.15);
    }else if(salario >= 3751.06){
        ir = parseFloat(salario * 0.223);
    }

    liq = salario - ir - inss;

    const res = document.getElementById("resultado");
    res.textContent = `${nome} você tem ${idade} anos de idade e recebe R$ ${salario}`;
    res.textContent += `\n descontos como INSS ${inss} e IR ${ir} e o salario liquido ficou R$ ${liq}`;

}
function limpar(){
    const nomeL = document.getElementById("nome"); 
    const rbL = document.querySelector("name=genero"); 
    const dataL = document.getElementById("data"); 
    const brutoL = document.getElementById("bruto");
    
    nomeL.contentEditable = "";
}