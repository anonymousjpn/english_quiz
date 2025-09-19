"use client"
import React from "react";
import "../../globals.css"
import { Noto_Serif_JP,Zen_Kaku_Gothic_New } from "next/font/google";
import { useSearchParams } from "next/navigation"
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
export default function failResult(){
    const searchParams=useSearchParams();
    const correctAnswers=searchParams.get("correctAnswers");
    const router=useRouter();
        const clickHome=()=>{
            router.push("/");
        };
        const handleRetry=()=>{
            router.push("/gradepre1/questions");
        };
    return(
        <div className="ResultWallPaper">
            <div className="failWrapper">
                <header className={noto_Serif_JP.className}>準1級</header>
                <div className="failContainer">
                    <h1 className={`fail ${zen_kaku_gothic_new.className}`}>不合格</h1>
                    <h2 className="failAbout">結果の概要</h2>
                    <p className="failExplain" id="failExplain1">10問中、{correctAnswers}問正解でした。</p>
                    <p className="failExplain" id="failExplain2"><span>分からなかった単語・熟語があれば、<a href="https://ejje.weblio.jp/" target="_blank" className="link">英和辞典・和英辞典-Weblio辞書</a>にて調べてみましょう！</span></p>
                </div>
                <button className="returnHome" onClick={()=>clickHome()}>ホームへ戻る</button>
                <button className="retry" onClick={()=>handleRetry()}>再挑戦！</button>
            </div>
        </div>
    )
}