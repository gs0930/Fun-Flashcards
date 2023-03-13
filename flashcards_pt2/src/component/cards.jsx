import React from "react";
import { useState } from 'react';
import AnsForm from './AnswerForm'

const Cards = () => {
    const pairs = [
        { Question: "Will multiplying ones will always give you palindromic numbers? (Yes or No)", Answer: "Yes" },
        { Question: "How many zettabytes did the overall datasphere reach in 2020?", Answer: "64" },
        { Question: "Around what percent of the world's currency exists only on computers?", Answer: "90%" },
        { Question: "What was the first computer programming language that was widely used?", Answer: "FORTRAN" },
        { Question: "What does IBM stand for?", Answer: "International Business Machines" },
        { Question: "When was the AP exam in Computer Science was first offered?", Answer: "1984" },
        { Question: "Was Python or Java created first?", Answer: "Python" },
        { Question: "When was the first TV invented?", Answer: "1927" },
        { Question: "How many key types of linked lists are there? (Enter a number)", Answer: "4" },
        { Question: "Is AI a subfield of Machine Learning (Yes or No)?", Answer: "No" },
    ];
    const [cards, setCards] = useState(pairs);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showFront, setShowFront] = useState(true);
    const [isCorrect, setIsCorrect] = useState(null);
    //const [answerForm, setAnswerForm] = useState({ answer: '' });

    const currentCard = cards[currentCardIndex];

    const handleNextCard = () => {
        const nextIndex = (currentCardIndex + 1) % cards.length;
        setCurrentCardIndex(nextIndex);
        setShowFront(true); // Show front of next card by default
        setIsCorrect(null); // Reset the answer correctness
        <AnsForm answer={''} />
    };
    const previous = () => {
        const prevIndex = (currentCardIndex - 1) % cards.length;
        setCurrentCardIndex(prevIndex);
        setShowFront(true); // Show front of previous card by default
        setIsCorrect(null); // Reset the answer correctness

    };

    const handleFlipCard = () => {
        setShowFront(!showFront);
    };

    const checkAnswer = (answerForm) => {
        if (answerForm.answer.toLowerCase() === currentCard.Answer.toLowerCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="flashcards">
            <h2>Tech and Some Math</h2>
            <p>Total cards: {pairs.length}</p>

            <div class="flip-card-inner"></div>
            <div className="card" onClick={handleFlipCard}>
                {showFront ? (
                    <div className="card-front">
                        <p>{currentCard.Question}</p>
                    </div>
                ) : (
                    <div className="card-back">
                        <p>{currentCard.Answer}</p>
                    </div>
                )}
            </div>

            {/* <AnsForm submitForm={(answer) => checkAnswer(AnsForm.answer)} /> */}
            {/* <AnsForm/> */}
            {showFront ?(<AnsForm submitForm={checkAnswer} />):(<AnsForm/>)}
              
                {showFront ?(<p>{isCorrect === null ? "" : (isCorrect ? "Correct!" : "Incorrect :(")}</p>) : (<p></p>)}
            

            
            <button onClick={previous}>←</button>
            <button onClick={handleNextCard}>→</button>
        </div>
    );
};

export default Cards;