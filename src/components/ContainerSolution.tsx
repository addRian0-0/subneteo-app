import uid from "tiny-uid";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import { SolutionType } from "../types/solution";
import Loading from "./Loading";

type Props = {
    solutionRes: SolutionType;
}

function ContainerSolution({ solutionRes }: Props) {
    return (
        <>
            {
                solutionRes.solved ? <>
                    <div className="container" >
                        <div className="table-details-sol">
                            <div className="celda" >
                                <div className="data" >
                                    <p>Red Clase</p>
                                </div>
                                <div className="data-info" >
                                    <p>{solutionRes.clase}</p>
                                </div>
                            </div>

                        </div>
                        <div className="table-details-sol">
                            <div className="celda" >
                                <div className="data" >
                                    <p>Rango entre subredes</p>
                                </div>
                                <div className="data-info" >
                                    <p>{solutionRes.rangoRed}</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-details-sol">
                            <div className="celda" >
                                <div className="data" >
                                    <p>Número de hosts por subred</p>
                                </div>
                                <div className="data-info" >
                                    <p>{solutionRes.numHosts}</p>
                                </div>
                            </div>
                        </div>

                        <h3>Máscara en binario</h3>
                        <div className="table-mascara" >
                            <div className="derecho" >Primer octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_binario.octb1}</div>
                            <div className="derecho" >Segundo octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_binario.octb2}</div>
                            <div className="derecho" >Tercer octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_binario.octb3}</div>
                            <div className="derecho" >Cuarto octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_binario.octb4}</div>
                        </div>

                        <h3>Máscara decimal</h3>
                        <div className="table-mascara" >
                            <div className="derecho" >Primer octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_decimal.octd1}</div>
                            <div className="derecho" >Segundo octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_decimal.octd2}</div>
                            <div className="derecho" >Tercer octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_decimal.octd3}</div>
                            <div className="derecho" >Cuarto octeto</div>
                            <div className="izquierdo" >{solutionRes.mascara_decimal.octd4}</div>
                        </div>

                        <h3>Número de redes: {solutionRes.redesRes}</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr className="table-secondary">
                                    <th scope="col">#Red</th>
                                    <th scope="col">Desde...</th>
                                    <th scope="col">Hasta...</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    solutionRes.rangosM.map(r => {
                                        return (
                                            <tr key={uid()} >
                                                <td>{r.num}</td>
                                                <td>{r.desde}</td>
                                                <td>{r.hasta}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>

                    </div></> : <Loading />
            }
        </>
    )
}


export default ContainerSolution;