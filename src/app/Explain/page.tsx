'use client'
import React, { useState } from "react";

export default function Explain() {
    return (
        <main className="flex w-screen h-screen overflow-hidden flex-col items-center  justify-end bg-gray-100 pt-12 p-5">
            <h3 className=" text-4xl font-bold text-gray-600">Lake View</h3>
            <figure className=" w-full h-full">
                <div className=" mt-5 shadow-md shadow-gray-600 rounded-3xl relative overflow-hidden aspect-square  bg-slate-300">
                    <img className="absolute inset-0 h-full w-auto" src="https://dicasdaitalia.com.br/wp-content/uploads/2015/09/praça-sao-pedro-roma.jpg" alt="" />
                </div>
                <figcaption className="w-full h-1/2 pb-3 mt-6 flex flex-col justify-around">
                    <div className="w-full">
                        <h4 className=" text-3xl font-bold text-gray-600">Lake View</h4>
                        <p className=" text-lg font-thin  text-gray-600">Brasil</p>
                    </div>
                    <p className=" text-gray-600 mb-3 text-justify">A Cidade que nunca dorme é uma das cidades mais vibrantes do mundo. Com o Empire State Building, a Estátua da Liberdade e o Central Park, Nova York é uma cidade que nunca deixa de surpreender.</p>
                    <button className="w-full h-16 bg-teal-600 rounded-2xl"> Compre Agora R$40</button>
                </figcaption>
            </figure>
        </main>
    )
}
