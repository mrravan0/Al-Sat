import './_advantages.scss';
import photo1 from '../../Images/Advantages/photo1.svg';
import photo2 from '../../Images/Advantages/photo2.svg';
import photo3 from '../../Images/Advantages/photo3.svg';
import arrow from '../../Images/Advantages/arrow.svg';
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard';
const Advantages = () => {
    return (
        <section className='advantages'>
            <div className="advantages__inner container">
                <div className="advantages__wrapper">
                    <div className="advantages__top">
                        <div className="advantages__text">
                            <h2 className='advantages__subtitle'>Üstünlüklətimiz</h2>
                            <h3 className='advantages__title'>Bizimlə alın, bizimlə satın</h3>
                        </div>
                        <div className="advantages__content">
                            <AdvantagesCard
                                image={photo1}
                                text={'Təhlükəsiz və məlumatların gizliliyi'}
                                description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'}
                            />
                            <AdvantagesCard
                                image={photo2}
                                text={'Yüksəy keyfiyyətli və sürətli veb-sayt'}
                                description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'}
                            />
                            <AdvantagesCard
                                image={photo3}
                                text={'24/7 xidmətinizdə olan dəstək xətti'}
                                description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'}
                            />
                        </div>
                    </div>
                    <div className="advantages__bottom">
                        <div className="advantages__left">
                            <div className="advantages__text">
                                <h2 className='advantages__subtitle'>
                                    Saytdan istifadə qaydaları
                                </h2>
                                <h3 className='advantages__title'>
                                    Lorem ipsum dolor sit amet, consectetur.
                                </h3>
                            </div>
                            <p className="advantages__card-subtitle">
                                Lorem ipsum dolor sit amet, consetetur      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
                            </p>
                        </div>
                        <div className="advantages__right">
                            <div className="advantages__info">
                                <img src={arrow} alt="" />
                                <p className='advantages__pass'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <div className="advantages__info">
                                <img src={arrow} alt="" />
                                <p className='advantages__pass'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                            <div className="advantages__info">
                                <img src={arrow} alt="" />
                                <p className='advantages__pass'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Advantages;