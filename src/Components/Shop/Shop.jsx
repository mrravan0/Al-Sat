import Button from "../Button/Button";
import './_shop.scss';
const Shop = () => {
    return (
        <div className="advantages__bottom">
            <div className="advantages__text">
                <h2 className='comment__title'>
                    Platformamızda mağaza açmaq istəyirsən?
                </h2>
                <p className="advantages__card-subtitle">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
            </div>
            <Button text={'Mağaza açın'} />
        </div>
    )
}

export default Shop;