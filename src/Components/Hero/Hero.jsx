import './_hero.scss';
import Search from '../Search/Search';
const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero__inner container">
                <div className="hero__wrapper">
                    <div className="hero__texts">
                        <h1 className="hero__title">İstədiyin hər şeyi bizimlə <br /> al və yaxud sat</h1>
                        <p className="hero__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                    </div>
                    <Search />
                </div>
            </div>
        </section>
    )
}
export default Hero;