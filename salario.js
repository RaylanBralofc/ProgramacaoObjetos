 var salario=0;
 var salariobase=parseFloat(prompt("Salario"));
 var horassemanaltrabalhada=parseFloat(prompt("Horas Semanais Trabalhadas"))
 var hora=salariobase/160;
 
 var horaextra=hora*1.5
 if(horassemanaltrabalhada>=40){

salario=salariobase+(horaextra*(horassemanaltrabalhada-40));
alert ("salario bruto:"+ salario +"\n salarioliquido:" + salario * 0.975);0,975//iss calculado 7,5%
}
 else{
salario=salariobase-(horassemanaltrabalhada*hora);
alert(salario);//160==40h carga trabalhada * 4 semanas do mes (aparecimento)




 }

 
