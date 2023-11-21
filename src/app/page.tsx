'use client'
import Home from "./Home/page"
import React, { useState } from "react";

export default function app() {

  const [page, Setpage] = useState(1)

  const handlehome = (index: number) => {
    Setpage(index);
  }


  return (
    <main className="flex w-screen h-screen flex-col items-center  justify-end bg-gray-200">
      {page === 1 ? <Home /> : ""}
      <div className="h-24 w-full bg-white z-10 grid grid-cols-5 gap-4 rounded-t-3xl px-8 items-end">
        <button onClick={() => handlehome(1)} className={`h-4/5 ${page === 1 ? ' rounded-t-lg bg-teal-600  transition-colors duration-200' : 'bg-white transition-colors duration-200'} flex items-center justify-center`}><img className="w-auto h-2/3" src={page === 1 ? "/home/homew.svg" : "/home/home.svg"} alt="" /></button>
        <button onClick={() => handlehome(2)} className={`h-4/5 ${page === 2 ? ' rounded-t-lg bg-teal-600  transition-colors duration-200' : 'bg-white transition-colors duration-200'} flex items-center justify-center`}><img className="w-auto h-2/3" src={page === 2 ? "/home/speechw.svg" : "/home/speech.svg"} alt="" /></button>
        <button onClick={() => handlehome(3)} className={`h-4/5 ${page === 3 ? ' rounded-t-lg bg-teal-600  transition-colors duration-200' : 'bg-white transition-colors duration-200'} flex items-center justify-center`}><img className="w-auto h-2/3" src={page === 3 ? "/home/circlew.svg" : "/home/circle.svg"} alt="" /></button>
        <button onClick={() => handlehome(4)} className={`h-4/5 ${page === 4 ? ' rounded-t-lg bg-teal-600  transition-colors duration-200' : 'bg-white transition-colors duration-200'} flex items-center justify-center`}><img className="w-auto h-2/3" src={page === 4 ? "/home/calendarw.svg" : "/home/calendar.svg"} alt="" /></button>
        <button onClick={() => handlehome(5)} className={`h-4/5 ${page === 5 ? ' rounded-t-lg bg-teal-600  transition-colors duration-200' : 'bg-white transition-colors duration-200'} flex items-center justify-center`}><img className="w-auto h-2/3" src={page === 5 ? "/home/userw.svg" : "/home/user.svg"} alt="" /></button>
      </div>
    </main>
  )
}
