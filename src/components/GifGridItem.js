// export const GifGridItem = (props) => {

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__bounceIn">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
