import Hero from '../../Components/Hero/Hero';
import Products from '../../Components/Products/Products';
import Advantages from '../../Components/Advantages/Advantages';
import Comment from '../../Components/Comment/Comment';
import { DataProvider } from '../../Context/Context';

const Home = () => {
    return (
        <DataProvider>
            <Hero />
            <Products />
            <Advantages />
            <Comment />
        </DataProvider>
    )
}
export default Home;