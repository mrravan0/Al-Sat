import './_comment.scss';
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard';
import photo1 from '../../Images/Comment/photo1.png';
import photo2 from '../../Images/Comment/photo2.png';
import photo3 from '../../Images/Comment/photo3.png';
const Comment = () => {
    return (
        <section className='comment'>
            <div className="comment__inner container">
                <div className="advantages__wrapper">
                    <div className="advantages__top">
                        <div className="advantages__text">
                            <h3 className='advantages__title'>Bizim haqqımızda olan rəylər</h3>
                        </div>
                        <div className="comment__content">
                            <AdvantagesCard
                                image={photo1}
                                text={'Ron Wood'}
                                description={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                                }
                                subText={'CEO'}
                            />
                            <AdvantagesCard
                                image={photo2}
                                text={'Mark Mason'}
                                description={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                                }
                                subText={'Marketing Manager'}
                            />
                            <AdvantagesCard
                                image={photo3}
                                text={'Sam Preston'}
                                description={
                                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                                }
                                subText={'CTO'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Comment;