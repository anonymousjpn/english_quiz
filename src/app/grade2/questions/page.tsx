"use client"
import React from "react";
import "../../globals.css"
import { Noto_Serif_JP} from "next/font/google";
import { useState, useEffect } from "react";
import grade2data from "../grade2"
import { useRouter } from "next/navigation";

const noto_Serif_JP = Noto_Serif_JP({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap"
});

export default function grade2() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const quizlength = grade2data.length
    const router = useRouter();
    const handleClick = (clickedChoice: number) => {
        if (clickedChoice === grade2data[questionIndex].answer) {
            setCorrectAnswers((prev) => prev + 1);
        } else {
            setCorrectAnswers(correctAnswers);
        }
        setQuestionIndex(prev => prev + 1);
    }
    useEffect(() => {
        if (questionIndex === quizlength) {
            if(correctAnswers>=8){
                router.push(`/grade2/successResult?correctAnswers=${correctAnswers}`)
            }else if(correctAnswers<8){
                router.push(`/grade2/failResult?correctAnswers=${correctAnswers}`)
            }
        }
    }, [questionIndex]);
    return (
        <div className="wallPaperGrade2">
            <div className="quizWrapper">
                <header className={noto_Serif_JP.className}>2級</header>
                {grade2data[questionIndex] && <p className="question">{`${questionIndex + 1}.${grade2data[questionIndex].question}`}</p>}
                {grade2data[questionIndex] && grade2data[questionIndex].choices.map((choice, index) => {
                    return <button key={index} onClick={() => handleClick(index)} className={`answer${index}`}>{choice}</button>
                })}
            </div>
        </div>
    )
}