import Layout from '../../Components/Layout/Layout';
import Hero from '../../Components/Hero/Hero';
import Products from '../../Components/Products/Products';
import Advantages from '../../Components/Advantages/Advantages';
import Comment from '../../Components/Comment/Comment';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Products />
            <Advantages />
            <Comment />
        </Layout>
    )
}
export default Home;