import { useState } from "react";

function Faq() {
    const [isOpen, setIsOpen] = useState([false, false, false]);

    const toggleDescription = (index, questionElement) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
        questionElement.classList.toggle("answer");
    };

    return (
        <div className='mx-12 mb-12 mt-12'>
            <h1 className='text-blue-700 font-extrabold text-4xl'>FAQ</h1>
            <div className="question">
                <h1 onClick={(e) => toggleDescription(0, e.currentTarget)}>Can education flashcards be used for all age groups?</h1>
                {isOpen[0] && (
                    <div className="description">
                        <p>Yes, education flashcards can be adapted for various age groups depending on the content and complexity of the material. They can be used from early childhood education to adult learning.</p>
                    </div>
                )}
                <i className={`fa-solid fa-caret-${isOpen[0] ? 'up' : 'down'}`} onClick={(e) => toggleDescription(0, e.currentTarget.parentNode)}></i>
            </div>
            <div className="question">
                <h1 onClick={(e) => toggleDescription(1, e.currentTarget)}>How do education flashcards work?</h1>
                {isOpen[1] && (
                    <div className="description">
                        <p>Education flashcards work by presenting information in a question-and-answer format, helping learners to memorize and recall key concepts through repetition and active recall.</p>
                    </div>
                )}
                <i className={`fa-solid fa-caret-${isOpen[1] ? 'up' : 'down'}`} onClick={(e) => toggleDescription(1, e.currentTarget.parentNode)}></i>
            </div>
            <div className="question">
                <h1 onClick={(e) => toggleDescription(2, e.currentTarget)}>Can education flashcards be used for test preparation?</h1>
                {isOpen[2] && (
                    <div className="description">
                        <p>Yes, education flashcards are commonly used for test preparation as they facilitate active learning and help in reinforcing knowledge and concepts.</p>
                    </div>
                )}
                <i className={`fa-solid fa-caret-${isOpen[2] ? 'up' : 'down'}`} onClick={(e) => toggleDescription(2, e.currentTarget.parentNode)}></i>
            </div>
        </div>
    )
}

export default Faq;
