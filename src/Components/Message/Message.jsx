import './_message.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import photo1 from '../../Images/Message/photo1.svg'
import photo3 from '../../Images/Message/photo2.svg'
import photo2 from '../../Images/Message/photo3.svg'
const Message = () => {
    return (
        <section className='message'>
            <div className="message__inner container">
                <div className="message__wrapper">
                    <h1 className='message__title'>Bizimlə əlaqə</h1>
                    <div className="message__content">
                        <div className="message__left">
                            <div className="message__text">
                                <h2 className="message__subTitle">Bizə mesaj yazın!</h2>
                                <p className="message__description">Mesajınıza ən qısa bir zamanda cavab veriləcək.</p>
                            </div>
                            <form className="message__form">
                                <div className="message__name">
                                    <FormInput text={'Ad'} />
                                    <FormInput text={'Soyad'} />
                                </div>
                                <FormInput text={'E-poçt ünvanı'} type='email' />
                                <FormInput text={'Başlıq'} />
                                <textarea className='message__textArea' placeholder='Mesaj'></textarea>
                                <Button text={'Göndər'} />
                            </form>
                        </div>
                        <div className="message__right">
                            <div className="message__info">
                                <img src={photo1} alt="" />
                                <div className="message__number">
                                    <p className='message__number-info'>+994 123 45 67</p>
                                    <p className='message__number-instrument'>Telefon</p>
                                </div>
                            </div>
                            <div className="message__info">
                                <img src={photo2} alt="" />
                                <div className="message__number">
                                    <p className='message__number-info'>+994 123 45 67</p>
                                    <p className='message__number-instrument'>Telefon</p>
                                </div>
                            </div>
                            <div className="message__info">
                                <img src={photo3} alt="" />
                                <div className="message__number">
                                    <p className='message__number-info'>+994 123 45 67</p>
                                    <p className='message__number-instrument'>Telefon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Message;