'use client'
import React, { useState } from 'react';
import Locais from './locais';
import Link from 'next/link';

export default function Home() {
    const [check, setCheck] = useState(0);
    const locais = Locais();
    const handlecheck = (index: number) => {
        setCheck(index);
    }

    const nome = [
        { name: "montanhas", icons: "/tela/mountain.svg", iconsw: "/tela/mountainwhite.svg" },
        { name: "cidade", icons: "/tela/city.svg", iconsw: "/tela/citywhite.svg" },
        { name: "praia", icons: "/tela/beach.svg", iconsw: "/tela/beachwhite.svg" },
        { name: "deserto", icons: "/tela/sun.svg", iconsw: "/tela/sunwhite.svg" }
    ]




    return (
        <article className='w-screen h-full px-5 pt-12'>
            <section className='w-full h-20 flex items-center gap-4'>
                <input type="text" className='w-full h-2/4 rounded-xl px-5' placeholder='Search...' />
                <button className=' w-16 h-12 bg-teal-600 rounded-lg flex items-center justify-center'><img src="magnifying.svg" alt="" className='w-1/2 h-1/2' /></button>
            </section>
            <section className='w-full h-1/7 my-5'>
                <h4 className='text-black font-semibold mb-3 ml-3'>Categorias</h4>
                <div className='w-full h-auto relative flex overflow-x-scroll  gap-2 overscroll-none'>
                    {nome.map((nome, index) => (
                        <button onClick={() => handlecheck(index)} key={index} className={`${check === index ? ' transition-all duration-500 border border-teal-600' : ' transition-all duration-500 border border-transparent'}  w-fit p-1 pr-2  items-center rounded-full bg-white flex`}>
                            <div className={` items-center justify-center flex ${check === index ? ' transition-all duration-500 bg-teal-600 ' : 'transition-all duration-500 bg-white'} h-8 w-8 mr-1 rounded-full`}>
                                <img src={check === index ? nome.iconsw : nome.icons} className='w-3/5 h-3/5' />
                            </div>
                            <p className="text-teal-600 text-lg font-semibold">{nome.name}</p>
                        </button>
                    ))}
                </div>
            </section >
            <div className=' flex w-full justify-between px-3'>
                <h4 className='text-black font-semibold mb-3'>Top Trips</h4>
                <a href="" className='  text-teal-600 '>Ver mais</a>
            </div>
            <section className='w-full h-2/6  relative'>
                <div className='h-full w-full gap-4 flex relative overflow-x-scroll p-3'>
                    {locais.filter((locais) => locais.tema === check.toString()).map((locais, index) => (
                        <button key={index} className='w-1/2 h-full relative rounded-xl  bg-white justify-start px-2 py-3'>
                            <div className='h-3/5 w-36 rounded-xl shadow-sm shadow-gray-700 relative overflow-hidden mb-2'>
                                <img src={locais.img} alt="" className='w-auto  h-full object-cover rounded-md' />
                            </div>
                            <div className='h-2/5 w-full'>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className=' text-sm font-bold text-teal-600 '>
                                        {locais.local}
                                    </p>
                                </div>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className='text-sm font-medium text-teal-600'>
                                        {locais.pais}
                                    </p>
                                </div>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className='text-sm font-bold text-gray-500'>
                                        {locais.valor}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </section>
            <div className=' flex w-full justify-between px-4'>
                <h4 className='text-black font-semibold mb-3'>Group Tour</h4>
                <a href="" className='  text-teal-600 '>Ver mais</a>
            </div>
            <section className='w-full h-1/4'>
                <div className='h-full w-full gap-4 flex overflow-hidden overflow-x-scroll p-3'>
                    {locais.filter((locais) => locais.tema === check.toString()).slice().map((locais, index) => (
                        <Link key={index}
                            href={`/Explain?local=${locais.local}&img=${locais.img}&pais=${locais.pais}&desc=${locais.descricao}&price=${locais.valor}`} className='w-full h-full relative rounded-xl bg-white justify-start flex px-2 py-3'>
                            <div className='h-full w-96 rounded-xl shadow-sm shadow-gray-700 relative overflow-hidden mb-2'>
                                <img src={locais.img} alt="" className='w-auto  h-full object-cover rounded-md' />
                            </div>
                            <div className=' ml-4 h-3/5 w-full'>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className=' text-sm font-bold text-teal-600 '>
                                        {locais.local}
                                    </p>
                                </div>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className='text-sm font-medium text-teal-600'>
                                        {locais.pais}
                                    </p>
                                </div>
                                <div className=' h-1/3 w-full flex justify-between items-center'>
                                    <p className='text-lgfont-bold text-gray-500'>
                                        {locais.valor}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </article >
    )
}
