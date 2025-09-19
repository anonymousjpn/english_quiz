"use client"
import React from "react";
import "./globals.css"
import { Noto_Serif_JP,Kosugi_Maru } from "next/font/google";
import Image from "next/image";
import Modal from "react-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const noto_Serif_JP = Noto_Serif_JP({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap"
});
const kosugi_maru = Kosugi_Maru({
  subsets: ["latin"],
  weight: ["400"]
});

Modal.setAppElement(".HomeWallPaper")
export default function Home() {
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpenpre2, setIsOpenpre2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenpre1, setIsOpenpre1] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const router = useRouter();
  const handleStart5 = () => {
    router.push("/grade5/questions");
  };
  const handleStart4 = () => {
    router.push("/grade4/questions");
  };
  const handleStart3 = () => {
    router.push("/grade3/questions");
  };
  const handleStartpre2 = () => {
    router.push("/gradepre2/questions");
  };
  const handleStart2 = () => {
    router.push("/grade2/questions");
  };
  const handleStartpre1 = () => {
    router.push("/gradepre1/questions");
  };
  const handleStart1 = () => {
    router.push("/grade1/questions");
  };
  return (
    <div className="HomeWallPaper">
      <div className="wrapper">
        <header className={noto_Serif_JP.className}>英検対策サイト</header>
        <div className={`description ${noto_Serif_JP.className}`}>受験したい級を選択してください</div>
        <div className="grade5" onClick={() => setIsOpen5(true)}>
          <div className="view">
            <Image src="/img/London.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            5級
          </div>
        </div>
        <Modal isOpen={isOpen5} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検5級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStart5()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpen5(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="grade4" onClick={() => setIsOpen4(true)}>
          <div className="view">
            <Image src="/img/LosAngeles.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            4級
          </div>
        </div>
        <Modal isOpen={isOpen4} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検4級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStart4()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpen4(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="grade3" onClick={() => setIsOpen3(true)}>
          <div className="view">
            <Image src="/img/Sydney.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            3級
          </div>
        </div>
        <Modal isOpen={isOpen3}className="modal" overlayClassName="modalOverlay" >
          <h2 className="gradeTitle">英検3級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStart3()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpen3(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="gradepre2" onClick={() => setIsOpenpre2(true)}>
          <div className="view">
            <Image src="/img/Vancouver.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            準2級
          </div>
        </div>
        <Modal isOpen={isOpenpre2} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検準2級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStartpre2()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpenpre2(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="grade2" onClick={() => setIsOpen2(true)}>
          <div className="view">
            <Image src="/img/Singapore.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            2級
          </div>
        </div>
        <Modal isOpen={isOpen2} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検2級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStart2()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpen2(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="gradepre1" onClick={() => setIsOpenpre1(true)}>
          <div className="view">
            <Image src="/img/Dubai.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            準1級
          </div>
        </div>
        <Modal isOpen={isOpenpre1} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検準1級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStartpre1()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpenpre1(false)}>ホームに戻る</button>
          </div>
        </Modal>
        <div className="grade1" onClick={() => setIsOpen1(true)}>
          <div className="view">
            <Image src="/img/NewYork.jpg" alt="" className="photoIcon" width={500} height={500} />
          </div>
          <div className={`grade ${kosugi_maru.className}`}>
            1級
          </div>
        </div>
        <Modal isOpen={isOpen1} className="modal" overlayClassName="modalOverlay">
          <h2 className="gradeTitle">英検1級</h2>
          <div className="descriptionContainer">
            <p className="gradeDescription">問題数は10問です。</p>
            <button className="startButton" onClick={() => handleStart1()}>Start!</button>
            <button className="backButton" onClick={() => setIsOpen1(false)}>ホームに戻る</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
