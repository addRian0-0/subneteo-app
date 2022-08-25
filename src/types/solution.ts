export interface SolutionType {
    clase: string;
    /* Rango entre subredes */
    rangoRed: number;
    /* Numero de hosts por subred */
    numHosts: number;
    mascara_binario: MascaraBinario;
    mascara_decimal: MascaraDecimal;
    /* Numero de redes */
    redesRes: number;
    rangosM: Array<Rango>;
    solved: boolean;
}

export interface MascaraBinario {
    octb1: string;
    octb2: string;
    octb3: string;
    octb4: string;
}

export interface MascaraDecimal {
    octd1: string;
    octd2: string;
    octd3: string;
    octd4: string;
}

export interface Rango {
    /* Numero de red (1, 2, 3) */
    num: number;
    /* Que su mascara pertenece desde, hasta */
    desde: string;
    hasta: string;
}

export interface SacarRedes {
    bitTotales: number;
    clase: string;
    /* Texto en binario */
    binText: string;
}

export interface SacarRedesSol {
    mascara_binario: MascaraBinario;
    mascara_decimal: MascaraDecimal;
}

export interface SacarRangos {
    rango: number;
    clase: string;
    rangoRed: number;
    octatetos_entrada: OctatetosEntrada;
}

export interface OctatetosEntrada {
    oct1: string;
    oct2: string;
    oct3: string;
    oct4: string;
}