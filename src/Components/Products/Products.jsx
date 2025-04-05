import './_products.scss';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { DataContext } from '../../Context/Context';
import { useContext } from 'react';
const Products = () => {
    const { searchResult } = useContext(DataContext);
    return (
        <section className='products'>
            <div className="products__inner container">
                <div className="products__wrapper">
                    <div className="products__cards">
                        {
                            searchResult.map(item => (
                                <Card
                                    key={item.id}
                                    {...item}
                                />
                            ))
                        }
                    </div>
                    <Button text={'Hamısını göstər'} />
                </div>
            </div>
        </section>
    )
}
export default Products;