"use client"
import React from "react";
import "../../globals.css"
import { useSearchParams } from "next/navigation"
import { Noto_Serif_JP,Zen_Kaku_Gothic_New } from "next/font/google";
import { useRouter } from "next/navigation";
const noto_Serif_JP = Noto_Serif_JP({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap"
});
const zen_kaku_gothic_new=Zen_Kaku_Gothic_New({
    weight: ["500"],
    subsets: ["latin"],
    display:"swap"
});
export default function successResult() {
    const searchParams = useSearchParams();
    const correctAnswers = searchParams.get("correctAnswers");
    const router=useRouter();
    const clickHome=()=>{
        router.push("/");
    };
    const handleRetry=()=>{
        router.push("/grade4/questions");
    };
    return (
        <div className="ResultWallPaper">
            <div className="successWrapper">
                <header className={noto_Serif_JP.className}>4級</header>
                <div className="successContainer">
                    <h1 className={`success ${zen_kaku_gothic_new.className}`}>合格</h1>
                    <h2 className="successAbout">結果の概要</h2>
                    <p className="successExplain" id="successExplain1">おめでとうございます！10問中、{correctAnswers}問正解でした！</p>
                    <p className="successExplain" id="successExplain2">この調子で本番に向けて学習を継続しましょう！</p>
                </div>
                <button className="returnHome" onClick={()=>clickHome()}>ホームへ戻る</button>
                <button className="retry" onClick={()=>handleRetry()}>再挑戦！</button>
            </div>
        </div>
    )
}