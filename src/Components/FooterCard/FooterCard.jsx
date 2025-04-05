import './_footerCard.scss';
const FooterCard = ({ texts }) => {
    return (
        <div className="footer__card">
            {
                texts.map((item, index) => <p key={index} className='footer__description'>{item}</p>)
            }
        </div>
    )
}
export default FooterCard;