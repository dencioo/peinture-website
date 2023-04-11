import { useState } from 'react';
import './Peinture.css';
import peinture from './data/data';

export default function Peinture() {
    const [activePeinture, setActivePeinture ] = useState(0);

    const tabButtonHandler = (peintureNum) => {
        setActivePeinture(peintureNum);
    };

    const tabButtons = () => {
        return (
            <div className='tabButtons'>
                <button onClick={() => tabButtonHandler(0)} type='button'>Mona Lisa</button>
                <button onClick={() => tabButtonHandler(1)} type='button'>Napoleon</button>
                <button onClick={() => tabButtonHandler(2)} type='button'>Van Gogh</button>
                <button onClick={() => tabButtonHandler(3)} type='button'>Impression Sunrise</button>       
            </div>
        );
    };

    const leftImages = () => {
        return (
            <div>
                {activePeinture === 0 && <img alt='mona lisa' className='peinture' src={peinture.monalisa} />}
                {activePeinture === 1 && <img alt='napoleon' className='peinture' src={peinture.napoleon} />}
                {activePeinture === 2 && <img alt='vangogh' className='peinture' src={peinture.vangogh} />}
                {activePeinture === 3 && <img alt='sunrise' className='peinture' src={peinture.sunrise} />}
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                {activePeinture === 0 && (
                    <>
                        <div className='description_title'>Mona Lisa</div>
                        <div className='description_list'>
                            <ul>
                                <li>The Mona Lisa was painted by Leonardo da Vinci during the Renaissance in Florence</li>
                                <li>He began work on Mona Lisa in 1503-1504 and completed her before he died in 1519</li>
                                <li>Today, the painting can be seen in the Louvre in Paris where 6 million people see the painting each year</li>
                            </ul>
                        </div>
                    </>
                )}

                {activePeinture === 1 && (
                    <>
                        <div className='description_title'>Napoleon crossing the Alps</div>
                        <div className='description_list'>
                            <ul>
                                <li>One of the most famous paintings made by Jacques -Louis David of Napoleon Bonaparte completed around 1805</li>
                                <li>Painting shows a royal image of Napoleon riding his horse with his army through the Great St. Bernard Pass in May 1800.</li>
                                <li>The picture depicts royalty and also greatness in every sense.</li>
                            </ul>
                        </div>
                    </>
                )}

                {activePeinture === 2 && (
                    <>
                        <div className='description_title'>Portrait de L’artiste Sans Barbe</div>
                        <div className='description_list'>
                            <ul>
                                <li>This is one of the last oil painting of Vincent Van Gogh, which is also the self-portrait without beard and was made in 1889</li>
                                <li>This self-portrait was one of the most expensive painting of that time, which was sold for a jaw-dropping amount of $71.4 million in New York City in 1998</li>
                                <li>Van Gogh also gifted this to his mother on her birthday</li>
                            </ul>
                        </div>
                    </>
                )}

                {activePeinture === 3 && (
                    <>
                        <div className='description_title'>Impression, Sunrise</div>
                        <div className='description_list'>
                            <ul>
                                <li>The Impression, Sunrise portrays depicts the port of Le Havre, the hometown of Cloud Monet, at sunrise, a red sun and also two rowboats being the main elements of the masterpiece</li>
                                <li>The painting was made by Claude Monet in 1872 and was unique in its own way too</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className='peinture_section'>
            {tabButtons()}
            <div className='main'>
                {leftImages()}
                {rightDescriptions()}
            </div>
        </div>
    );
};

