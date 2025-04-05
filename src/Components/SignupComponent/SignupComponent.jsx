import './_signupComponent.scss';
import Button from '../Button/Button';
import photo1 from '../../Images/Signup/photo1.svg'
import photo2 from '../../Images/Signup/photo2.svg'
const SignupComponent = ({ children, status = false, text }) => {
    return (
        <section className='signup'>
            <div className="signup__inner container">
                <div className="signup__wrapper">
                    <h1 className="signup__title">{text}</h1>
                    <div className="signup__content">
                        <div className="signup__box">
                            <form className="signup__form">
                                <div className="signup__form-wrapper">
                                    {children}
                                </div>
                                <div className="signup__finish">
                                    <Button text={'Qeyd ol'} />
                                    <p className='signup__form-title'>Şifrəmi unutmuşam</p>
                                </div>
                            </form>
                            {status ?
                                <div className="signup__bottom">
                                    <button className='signup__button'>
                                        <img src={photo1} alt="" />
                                        <span className='signup__bottom-text'>Google ilə qeydiyyatdan keç</span>
                                    </button>
                                    <button className='signup__button'>
                                        <img src={photo2} alt="" />
                                        <span className='signup__bottom-text'>Facebook ilə qeydiyyatdan keç</span>
                                    </button>
                                </div> :
                                ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignupComponent;