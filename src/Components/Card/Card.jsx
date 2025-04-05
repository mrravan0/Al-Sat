import './_card.scss';
const Card = ({ img, price, name, date }) => {
    return (
        <div className='card'>
            <img src={img} alt="Photo" />
            <div className="card__description">
                <p className='card__price'>{price}</p>
                <p className="card__name">{name}</p>
                <p className='card__date'>{date}</p>
            </div>
        </div>
    )
}
export default Card;