import React, { useState } from 'react'
import footerLogo from '../assets/footerLogo.svg'
function Content() {
    const [counter, setCounter] = useState(1);
    const [cardData, setcardData] = useState("9 + 6 + 7x - 2x - 3");

    const handleClickDec = () => {
        if (counter === 1) {
            return;
        }
        setCounter((prev) => prev - 1);
    }

    const handleClickInc = () => {
        if (counter === 10) {
            return;
        }
        setCounter((prev) => prev + 1);
    }


    const revealCard = () => {
        const card = document.getElementById('card-body');
        if (card.classList.contains("reveal")) {
            setcardData("9 + 6 + 7x - 2x - 3")
            card.classList.remove("reveal")
            card.classList.add("rev");
        }
        else {
            setcardData("5x + 12");
            card.classList.add("reveal");
            card.classList.remove("rev");
        }
    }

    const expand = () => {
        const card = document.getElementById('card-body');
        card.classList.toggle("expand")
    }


    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-900 mx-12 mt-10'>Relations and Functions ( Mathematics )</h1>
            <div className='mx-12 mt-5 flex items-center gap-5'>
                <i className="fa-solid fa-house"></i> <p className='font-bold text-2xl text-gray-600'>Flashcard  &gt; Mathematics  &gt; <span className='text-blue-700'>Relation & Functions</span> </p>
            </div>
            <div className='flex flex-col items-center'>
                <div className="card-switch mt-5">
                    <ul className='flex gap-10'>
                        <li className='text-blue-700 underline'>Study</li>
                        <li>Quiz</li>
                        <li>Test</li>
                        <li>Game</li>
                        <li>Others</li>
                    </ul>
                </div>
                <div className="card flex justify-center" >
                    <div id='card-body' className="relative card-body w-[450px] bg-gradient-to-r from-blue-900 to-blue-500 h-60 rounded-2xl mt-5 cursor-pointer flex justify-center items-center" onClick={revealCard}>
                        <h1 className='text-white text-3xl font-semibold'>{cardData}</h1>
                        <i className="text-white fa-regular fa-lightbulb absolute top-5 left-5"></i>
                        <i className="fa-solid fa-volume-high absolute right-5 top-5 text-white"></i>
                    </div>
                </div>
                <div className="controls w-96 flex justify-between mt-4">
                    <i className="fa-solid fa-rotate-right" ></i>
                    <i className="fa-solid fa-circle-left" onClick={handleClickDec}></i>
                    <h1 className='text-2xl font-bold z-10'>{counter}/10</h1>
                    <i className="fa-solid fa-circle-right" onClick={handleClickInc}></i>
                    <i className="fa-solid fa-expand" onClick={expand}></i>
                </div>
            </div>
            <div className='flex justify-between items-center mx-12'>
                <img src={footerLogo} alt="" className='w-52' />
                <div className='flex items-center gap-3 cursor-pointer'>
                    <i className="fa-solid fa-circle-plus text-3xl"></i>
                    <h1 className='text-blue-700 font-bold text-2xl '>Create Flashcard</h1>
                </div>

            </div>
        </div>
    )
}

export default Content
