
const  CardSong = (props) => {

    const { title, album, banda, release, genero} = props
    return (
        <div className="cardsong">
            <h2>{title}</h2>
            <h3> <span>Album :</span>  {album} </h3>
            <h3> <span>Banda :</span>  {banda}</h3>
            <h3> <span>Fecha de Lanzamiento  :</span>  {release}  </h3>
            <h3> <span>Genero :</span> {genero}</h3>
        </div>
    )
}
export default CardSong