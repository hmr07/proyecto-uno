const Button = (props) => {
    //console.log(props)

    const { texto} = props

    return (
        <button className="btn-yellow">{texto}</button>
    )
}
export default Button