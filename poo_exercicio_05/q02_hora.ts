class Hora{
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hh: number, mm: number, ss: number){
        this.hora = hh;
        this.minutos = mm;
        this.segundos = ss;
    }

    public getHora(): number{
        return this.hora;
    }

    public getMinutos(): number{
        return this.minutos;
    }

    public getSegundos(): number{
        return this.segundos;
    }

    public getHorario(): string{
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}

let hrs: Hora = new Hora(15,30,0);
console.log(hrs.getHorario());