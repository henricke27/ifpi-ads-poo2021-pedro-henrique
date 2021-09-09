enum Estados {PI, CE, MA};

for(let i : number = 0; i < 3; i++){
    console.log(Estados[i]);    //Letra a;
}

for(let i : number = 0; i < 3; i++){
    let indice : number = Estados[Estados[i]];
    console.log(indice)         //Letra b; O laço acessa os valores do enum, retornado as suas repectivas posições. 
}    