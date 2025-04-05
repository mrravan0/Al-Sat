import './_search.scss';
import image from '../../Images/Search/image.svg';
import { useContext, useState } from 'react';
import { DataContext } from '../../Context/Context';
import Button from '../Button/Button';
const Search = () => {
    const { data, setSearchResult } = useContext(DataContext);
    let [inputResult, setInputResult] = useState('');
    const handleSearch = () => {
        setSearchResult(data.filter(item => item.name.toLowerCase().includes(inputResult.toLowerCase())));
    }
    return (
        <div className='search'>
            <div className='search__group'>
                <input
                    type="text"
                    className='search__input'
                    placeholder='Əşya və ya xidmət axtarışı'
                    onChange={(event) => setInputResult(event.target.value)} />
                <div className='search__content'>
                    <img src={image} alt="Location" />
                    <select className='search__select'>
                        <option value="Baki">Baki</option>
                        <option value="Gence">Gence</option>
                        <option value="Agdam">Agdam</option>
                    </select>
                </div>
            </div>
            <Button
                text={'Axtar'}
                onClick={handleSearch}
            />
        </div>
    )
}

export default Search;