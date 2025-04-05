import './_formInput.scss';
const FormInput = ({ text, type = 'text' }) => {
    return (
        <input type={type} className='formInput' placeholder={text} />
    )
}
export default FormInput;