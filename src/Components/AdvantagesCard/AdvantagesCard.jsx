import './_advantagesCard.scss';
const AdvantagesCard = ({ text, image, description, subText = null }) => {
    return (
        <div className="advantages__card">
            <img src={image} alt="" className='advantages__image' />
            {subText ?
                <>
                    <p className="advantages__card-subtitle">{description}</p>
                    <div className='advantages__card-group'>
                        <h2 className='advantages__card-title'>{text}</h2>
                        <p className='advantages__card-subtext'>{subText}</p>
                    </div>
                </>
                :
                <>
                    <h2 className='advantages__card-title'>{text}</h2>
                    <p className="advantages__card-subtitle">{description}</p>
                </>
            }
        </div>
    )
}
export default AdvantagesCard;