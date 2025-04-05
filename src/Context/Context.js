import { createContext, useState } from "react";
import photo1 from '../Images/Products/photo1.png';
import photo2 from '../Images/Products/photo2.png';
import photo3 from '../Images/Products/photo3.png';
import photo4 from '../Images/Products/photo4.png';
import photo5 from '../Images/Products/photo5.png';
import photo6 from '../Images/Products/photo6.png';
import photo7 from '../Images/Products/photo7.png';
import photo8 from '../Images/Products/photo8.png';
import photo9 from '../Images/Products/photo9.png';
import photo10 from '../Images/Products/photo10.png';
import photo11 from '../Images/Products/photo11.png';
import photo12 from '../Images/Products/photo12.png';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([
        { name: 'Divan', price: '210 AZN', date: 'Bakı, dünən, 15:21', img: photo1, id: 1 },
        { name: 'Dam örtükləri', price: '4,80 AZN', date: 'Bakı, bugün, 13:14', img: photo2, id: 2 },
        { name: 'Baseus Jump starter max', price: '195 AZN', date: 'Bakı, bugün, 13:15', img: photo3, id: 3 },
        { name: '"Kia Optima" ehtiyat hissələri', price: '5 AZN', date: 'Bakı, bugün, 12:33', img: photo4, id: 4 },
        { name: '"AirPods Pro', price: '390 AZN', date: 'Bakı, bugün, 12:32', img: photo5, id: 5 },
        { name: '""Lexus" ehtiyat hissələri', price: '5 AZN', date: 'Bakı, bugün, 12:29', img: photo6, id: 6 },
        { name: 'Oyuncaq "Volvo"', price: '32 AZN', date: 'Bakı, dünən, 00:52', img: photo7, id: 7 },
        { name: 'Masaüstü kompüter', price: '630 AZN', date: 'Bakı, bugün, 12:01', img: photo8, id: 8 },
        { name: 'Elektrik samovarı', price: '40 AZN', date: 'Bakı, bugün, 18:37', img: photo9, id: 9 },
        { name: 'Moped icarəsi', price: '12 AZN', date: 'Bakı, bugün, 18:37', img: photo10, id: 10 },
        { name: 'Villa kirayə verilir', price: '5000 AZN', date: 'Bakı, bugün, 18:37', img: photo11, id: 11 },
        { name: 'Dolab', price: '220 AZN', date: 'Bakı, bugün, 18:37', img: photo12, id: 12 },
    ]);
    let [searchResult, setSearchResult] = useState(data);
    return (
        <DataContext.Provider value={{ data, setData, searchResult, setSearchResult }}>
            {children}
        </DataContext.Provider>
    );
};