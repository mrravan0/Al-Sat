import Details from '../Details/Details';
import './_questions.scss';
const Questions = () => {
    return (
        <section className='questions'>
            <div className="questions__inner container">
                <div className="questions__wrapper">
                    <div className="questions__left">
                        <h1 className='questions__title'>
                            Tez-tez verilən suallar
                        </h1>
                        <p className="questions__description">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                        </p>
                    </div>
                    <div className="questions__right">
                        <Details
                            text={'Məhsulumu necə sata bilərəm?'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'} />
                        <Details
                            text={'Platformanızda necə mağaza açmaq olar?'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'} />
                        <Details
                            text={'Maksimum neçə elan yerləşdirə bilərəm?'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'} />
                        <Details
                            text={'Saytda hansı məhsullar satmaq qadağandır?'}
                            description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Questions;