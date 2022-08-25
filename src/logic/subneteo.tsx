import { DataRequireSubneteo } from "../types/data-requeried-sub";
import { MascaraBinario, MascaraDecimal, Rango, SacarRangos, SacarRedes, SacarRedesSol, SolutionType } from "../types/solution";

export const calcularRedes = ({ numRedes, oct1, oct2, oct3, oct4 }: DataRequireSubneteo): SolutionType => {

    let n = 0;
    let redesRes = 0;
    let clase = '';

    while (redesRes <= parseInt(numRedes)) {
        n += 1;
        redesRes = Math.pow(2, n);
        if (redesRes >= parseInt(numRedes)) {
            break;
        }
    }

    let oct1p = parseInt(oct1);

    ((oct1p) >= 1) && ((oct1p) <= 126) ? clase = "A" : "";
    ((oct1p) >= 128) && ((oct1p) >= 191) ? clase = "B" : "";
    ((oct1p) >= 192) && ((oct1p) >= 223) ? clase = "C" : "";

    let count = 0;
    let binText = '';
    while (count <= 7) {
        count++;
        if (count <= n) {
            binText += '1';
        } else {
            binText += '0';
        }
    }

    let bitInicial = 128;
    let bitTotales = 0;
    let contBit = 0;
    while (contBit <= n - 1) {
        contBit++;
        bitTotales += bitInicial;
        bitInicial /= 2;
    }

    let rangoRed = 256 - bitTotales;
    let potenciaHost = 0;
    switch (clase) {
        case "A":
            potenciaHost = 24 - contBit;
            break;
        case "B":
            potenciaHost = 16 - contBit;
            break;
        case "C":
            potenciaHost = 8 - contBit;
            break;
    }

    let numHosts = Math.pow(2, potenciaHost) - 2;

    const { mascara_binario, mascara_decimal } = sacarRedes({ bitTotales, clase, binText });

    const rangosM = sacarRangos({ rango: redesRes, clase, rangoRed, octatetos_entrada: { oct1, oct2, oct3, oct4 } });

    let solved = true;
    return { clase, rangoRed, numHosts, mascara_binario, mascara_decimal, redesRes, rangosM, solved };

}

const sacarRedes = ({ bitTotales, clase, binText }: SacarRedes): SacarRedesSol => {

    const txtBit = bitTotales.toString();
    let mascara_binario: MascaraBinario;
    let mascara_decimal: MascaraDecimal;

    switch (clase) {
        case "A":
            //Modificar todos los octetos binarios
            mascara_binario = {
                octb1: "11111111",
                octb2: binText,
                octb3: "00000000",
                octb4: "00000000"
            }
            //Modifcar octetos decimales
            mascara_decimal = {
                octd1: "255",
                octd2: txtBit,
                octd3: "0",
                octd4: "0"
            }
            break;
        case "B":
            //Modificar todos los octetos binarios
            mascara_binario = {
                octb1: "11111111",
                octb2: "00000000",
                octb3: binText,
                octb4: "00000000"
            }
            //Modifcar octetos decimales
            mascara_decimal = {
                octd1: "255",
                octd2: "0",
                octd3: txtBit,
                octd4: "0"
            }
            break;
        case "C":
            //Modificar todos los octetos binarios
            mascara_binario = {
                octb1: "11111111",
                octb2: "00000000",
                octb3: "00000000",
                octb4: binText
            }
            //Modifcar octetos decimales
            mascara_decimal = {
                octd1: "255",
                octd2: "0",
                octd3: "0",
                octd4: txtBit
            }
            break;
        default:
            mascara_binario = {
                octb1: "11111111",
                octb2: "00000000",
                octb3: "00000000",
                octb4: "00000000"
            }
            //Modifcar octetos decimales
            mascara_decimal = {
                octd1: "255",
                octd2: "0",
                octd3: "0",
                octd4: "0"
            }
            break;
    }
    return { mascara_binario, mascara_decimal };
}

const sacarRangos = ({ rango, clase, rangoRed, octatetos_entrada }: SacarRangos): Array<Rango> => {

    //Reinicia los rangos
    let rangosMNew: Array<Rango>;
    let i = 0;
    let array: Array<Rango> = [];

    let { oct1, oct2, oct3, oct4 } = octatetos_entrada;

    //Variables de redes IP 10.0.0.0 - 10.255.255.255
    let redDesde = ``;
    let redHasta = ``;
    let numDesde = 0;
    let numHasta = 0;

    while (i <= rango - 1) {
        i++;
        switch (clase) {
            case "A":
                redDesde = `${oct1}.${numDesde}.${'0'}.${'0'}`;
                redHasta = `${oct1}.${numDesde + rangoRed - 1}.${'255'}.${'255'}`;
                break;
            case "B":
                redDesde = `${oct1}.${oct2}.${numDesde}.${'0'}`;
                redHasta = `${oct1}.${oct2}.${numDesde + rangoRed - 1}.${'0'}`;
                break;
            case "C":
                redDesde = `${oct1}.${oct2}.${oct3}.${numDesde}`;
                redHasta = `${oct1}.${oct2}.${oct3}.${numDesde + rangoRed - 1}`;
                break;
        }
        array.push({
            num: i,
            desde: redDesde,
            hasta: redHasta
        });
        numDesde += rangoRed;
    }
    return array;

}