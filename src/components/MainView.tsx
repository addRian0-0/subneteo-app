import { ChangeEvent, useState } from "react";
import InfoCard from "./InfoCard";
import ContainerSolution from "./ContainerSolution";
import "../styles/cards-collapsable.css"
import { FormEvent } from "react";
import { calcularRedes } from "../logic/subneteo";
import { SolutionType } from "../types/solution";
import { DataRequireSubneteo } from "../types/data-requeried-sub";

function MainView() {

    const [formValues, setForm] = useState<DataRequireSubneteo>({
        oct1: "0",
        oct2: "0",
        oct3: "0",
        oct4: "0",
        numRedes: "0"
    });
    const [solutionR, setSolutionR] = useState<SolutionType>({
        clase: "A",
        rangoRed: 0,
        numHosts: 0,
        mascara_binario: {
            octb1: "0",
            octb2: "0",
            octb3: "0",
            octb4: "0",
        },
        mascara_decimal: {
            octd1: "0",
            octd2: "0",
            octd3: "0",
            octd4: "0",
        },
        redesRes: 0,
        rangosM: [],
        solved: false
    });

    const sendData = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        /* Resolver */
        const solution = calcularRedes(formValues);
        setSolutionR(solution);
        
    }

    type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
        setForm({ ...formValues, [name]: value });

    return (
        <>
            <div className="info" >
                <h2>Calculadora de redes</h2>
                <InfoCard title="¿Qué es el subneteo?"
                    text="El subneteo de red es un procedimiento que divide a una red primaria IPv4 en una serie de subredes, de tal
                    forma que cada una de ellas funcione a nivel de envío y recepción de paquetes, como una red
                    individual, todas estas subredes pertenecen a la red original y, por lo tanto, al mismo dominio de
                    difusión original."/>
                <div className="wrap-collabsible2">
                    <input id="collapsible2" className="toggle2" type="checkbox" />
                    <label htmlFor="collapsible2" className="lbl-toggle2">¿Cuántas redes requieres?</label>
                    <div className="collapsible-content2">
                        <div className="content-inner2">
                            <p>
                                Para este subneteo se <strong>require la direccion IP y el numero de redes solicitadas.</strong>
                                <br />
                                <br />
                                Obtendras:
                            </p>
                            <ul>
                                <li> Mascara de red en binario </li>
                                <li> Mascara de red en decimal </li>
                                <li> Clase de red (A, B, C) </li>
                                <li> El rango entre subredes o salto </li>
                                <li> Numero de hosts por subred </li>
                                <li> Toda la secuencia de la mascara decimal definida por el rango </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-form" >
                    <h3>Datos necesarios: </h3>
                    <label >Dirección IP</label>
                    <form onSubmit={sendData} >
                        <div className="ip-inputs" >
                            <input
                                onChange={handleInputChange}
                                value={formValues.oct1}
                                type="number" className="cuartetos-ip" name="oct1" placeholder="10" required id="cuarteto-1" />
                            <input
                                onChange={handleInputChange}
                                value={formValues.oct2}
                                type="number" className="cuartetos-ip" name="oct2" placeholder="0" required id="cuarteto-2" />
                            <input
                                onChange={handleInputChange}
                                value={formValues.oct3}
                                type="number" className="cuartetos-ip" name="oct3" placeholder="0" required id="cuarteto-3" />
                            <input
                                onChange={handleInputChange}
                                value={formValues.oct4}
                                type="number" className="cuartetos-ip" name="oct4" placeholder="0" required id="cuarteto-4" />
                        </div>
                        <br />
                        <div className="container-n-redes" >
                            <label className="redes-n-lbl" >Número de redes necesarios</label>
                            <input
                                onChange={handleInputChange}
                                value={formValues.numRedes}
                                type="number" name="numRedes" placeholder="8" required className="redes-n" />
                        </div>
                        <button type="submit" className="send-data" >Calcular</button>
                    </form>
                </div>

                <div className="container-sol">
                    <ContainerSolution solutionRes={solutionR} />
                </div>

            </div>
        </>
    )
}


export default MainView;