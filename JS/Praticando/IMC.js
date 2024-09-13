const imc =(peso,altura)=>peso/(altura*altura)
const situacao= (valor_imc)=>{
    if(valor_imc<18.5)
        return"Abaixo do peso";
    else if(valor_imc<25)
        return "Pessoa ideal";
    else if(valor_imc<30)
        return"Levemente acima do peso";
    else if(valor_imc<35)
        return "Obesidade de grau 1";
    else if(valor_imc<40)
        return "Obesidade grau 2"
    else 
        return "Obesidade de grau 3"
}