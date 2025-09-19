"use client"
import React from "react";
import "../../globals.css"
import { Noto_Serif_JP} from "next/font/google";
import { useState, useEffect } from "react";
import grade1data from "../grade1"
import { useRouter } from "next/navigation";

const noto_Serif_JP = Noto_Serif_JP({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap"
});

export default function grade1() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const quizlength = grade1data.length
    const router = useRouter();
    const handleClick = (clickedChoice: number) => {
        if (clickedChoice === grade1data[questionIndex].answer) {
            setCorrectAnswers((prev) => prev + 1);
        } else {
            setCorrectAnswers(correctAnswers);
        }
        setQuestionIndex(prev => prev + 1);
    }
    useEffect(() => {
        if (questionIndex === quizlength) {
            if(correctAnswers>=8){
                router.push(`/grade1/successResult?correctAnswers=${correctAnswers}`)
            }else if(correctAnswers<8){
                router.push(`/grade1/failResult?correctAnswers=${correctAnswers}`)
            }
        }
    }, [questionIndex]);
    return (
        <div className="wallPaperGrade1">
            <div className="quizWrapper">
                <header className={noto_Serif_JP.className}>1級</header>
                {grade1data[questionIndex] && <p className="question">{`${questionIndex + 1}.${grade1data[questionIndex].question}`}</p>}
                {grade1data[questionIndex] && grade1data[questionIndex].choices.map((choice, index) => {
                    return <button key={index} onClick={() => handleClick(index)} className={`answer${index}`}>{choice}</button>
                })}
            </div>
        </div>
    )
}