export interface Student {
    idStudent:number,
    name:string,
    firstName:string,
    birthday:string,
    adress:string,
    gender:string,
    year:number,
    serie:Serie,
    establishment:Establishment,
    examinationCenter:ExaminationCender
}

export interface Serie {
    idSerie:number,
    serieName:string
}

export interface Establishment {
    idEstablishment:number,
    establishment:string
}

export interface ExaminationCender {
    idCenter:number,
    venue:string
}
