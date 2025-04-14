import { Fragment } from 'react';
import FormInput from '../../Components/FormInput/FormInput';
import SignupComponent from '../../Components/SignupComponent/SignupComponent';
const Signup = () => {
    return (
        <Fragment>
            <SignupComponent status={true} text={'Qeydiyyat'}>
                <div className="signup__form-card">
                    <h2 className='signup__form-title'>Poçt adresiniz <span style={{ color: 'red' }}>*</span></h2>
                    <FormInput text={'E-poçt ünvanı'} type={'email'} />
                </div>
                <div className="signup__form-card">
                    <h2 className='signup__form-title'>Şifrə <span style={{ color: 'red' }}>*</span></h2>
                    <FormInput text={'Şifrəni daxil edin'} type={'password'} />
                </div>
                <div className="signup__form-card">
                    <h2 className='signup__form-title'>Şifrəni təsdiqləyin <span style={{ color: 'red' }}>*</span></h2>
                    <FormInput text={'Şifrəni yenidən daxil edin'} type={'password'} />
                </div>
            </SignupComponent>
        </Fragment>
    )
}
export default Signup;