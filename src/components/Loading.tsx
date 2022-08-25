import cat from "../assets/cat_animal_4449.png";

export default function Loading() {
    return (
        <div className="loading">
            <img src={cat} alt="Gatito" />
            <p>Cargando...</p>
        </div>
    )
}
