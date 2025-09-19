"use client"
import React from "react";
import "../../globals.css"
import { Noto_Serif_JP} from "next/font/google";
import { useState, useEffect } from "react";
import gradepre2data from "../gradepre2"
import { useRouter } from "next/navigation";

const noto_Serif_JP = Noto_Serif_JP({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap"
});

export default function gradepre2() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const quizlength = gradepre2data.length
    const router = useRouter();
    const handleClick = (clickedChoice: number) => {
        if (clickedChoice === gradepre2data[questionIndex].answer) {
            setCorrectAnswers((prev) => prev + 1);
        } else {
            setCorrectAnswers(correctAnswers);
        }
        setQuestionIndex(prev => prev + 1);
    }
    useEffect(() => {
        if (questionIndex === quizlength) {
            if(correctAnswers>=8){
                router.push(`/gradepre2/successResult?correctAnswers=${correctAnswers}`)
            }else if(correctAnswers<8){
                router.push(`/gradepre2/failResult?correctAnswers=${correctAnswers}`)
            }
        }
    }, [questionIndex]);
    return (
        <div className="wallPaperGradepre2">
            <div className="quizWrapper">
                <header className={noto_Serif_JP.className}>準2級</header>
                {gradepre2data[questionIndex] && <p className="question">{`${questionIndex + 1}.${gradepre2data[questionIndex].question}`}</p>}
                {gradepre2data[questionIndex] && gradepre2data[questionIndex].choices.map((choice, index) => {
                    return <button key={index} onClick={() => handleClick(index)} className={`answer${index}`}>{choice}</button>
                })}
            </div>
        </div>
    )
}