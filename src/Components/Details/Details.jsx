import './_details.scss';
const Details = ({ text, description }) => {
    return (
        <details className='details'>
            <summary className='details__summary'>
                <h2 className='details__title'>{text}</h2>
                <span className='details__logo'></span>
            </summary>
            <p className="details__description">
                {description}
            </p>
        </details>
    )
}
export default Details;