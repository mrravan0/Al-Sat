import FormInput from "../../Components/FormInput/FormInput";
import Layout from "../../Components/Layout/Layout";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
const Login = () => {
    return (
        <Layout>
            <SignupComponent text={'Giriş'}>
                <div className="signup__form-card">
                    <h2 className='signup__form-title'>Poçt adresiniz <span style={{ color: 'red' }}>*</span></h2>
                    <FormInput text={'E-poçt ünvanı'} type={'email'} />
                </div>
                <div className="signup__form-card">
                    <h2 className='signup__form-title'>Şifrə <span style={{ color: 'red' }}>*</span></h2>
                    <FormInput text={'Şifrəni daxil edin'} type={'password'} />
                </div>
            </SignupComponent>
        </Layout>
    )
}
export default Login;