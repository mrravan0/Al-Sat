import './_footer.scss';
import FooterCard from '../FooterCard/FooterCard';
import Button from '../Button/Button';
import Shop from '../Shop/Shop';
import photo1 from '../../Images/Footer/photo1.svg';
import photo2 from '../../Images/Footer/photo2.svg';
import photo3 from '../../Images/Footer/photo3.svg';
import photo4 from '../../Images/Footer/photo4.svg';
import { Fragment } from 'react';
const Footer = () => {
    const array1 = ['Şirkət', 'Layihə haqqında', 'Qayda', 'Məxfilik siyasəti'];
    const array2 = ['Siyasət', 'İstifadəçi razılaşması', 'Ümumi oferta müqaviləsi', 'Blog', 'Bizimlə Əlaqə'];
    const array3 = ['Əlaqə', '+994 12 345 67 89', 'info@evalsat.az', 'al@evalsat.az', 'sat@evalsat.az'];
    return (
        <Fragment>
            <Shop />
            <footer className='footer'>
                <div className="footer__inner container">
                    <div className="footer__wrapper">
                        <div className="footer__top">
                            <div className="footer__top-left">
                                <FooterCard texts={array1} />
                                <FooterCard texts={array2} />
                                <FooterCard texts={array3} />
                            </div>
                            <div className="footer__top-right">
                                <p className='footer__title'>Elanlar e-mailinizə gəlsin</p>
                                <div className="footer__group">
                                    <input className='footer__input footer__description' type="text" placeholder='E-mailinizi daxil edin' />
                                    <Button text={'Daxil et'} />
                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <div className="footer__content">
                                <p className="footer__description">© Ev Al Sat MMC 2022</p>
                                <div className="footer__soc1als">
                                    <img src={photo1} alt="" />
                                    <img src={photo2} alt="" />
                                    <img src={photo3} alt="" />
                                    <img src={photo4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer;