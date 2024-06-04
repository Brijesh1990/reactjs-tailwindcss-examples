import React from 'react'

export default function FlexApp() {
  return (
    <div>
      <h1 className='text-center text font-extrabold text-5xl'>Flex box examples in React js</h1>
<div className="flex flex-row">

  <div className="basis-1/4 md:basis-1/3 w-128 m-5 p-5 bg-rose-950 text-white font-extrabold text-5xl">01</div>
  <div className="basis-1/4 md:basis-1/3 w-128 m-5 p-5 bg-pink-950 text-white italic text-5xl font-extrabold">02</div>
  <div className="basis-1/2 md:basis-1/3 w-128 m-5 p-5 bg-green-950 text-white">03</div>

  
</div>
<button className="bg-cyan-500 hover:bg-cyan-600 w-64 ml-5 h-10">Subscribe</button>

<h1 className='ml-5 text-5xl font-extrabold'>Contact Form</h1>
<form>
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>
    
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>

    
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>

    
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>

    
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>

    
    <input type='text' placeholder='Name' className='ml-5 p-2 w-350 border border-spacing-1 border-slate-950' />
    <br/><br/>

    <button className="bg-cyan-500 hover:bg-cyan-600 w-64 ml-5 h-10">Send</button>

    <br /><br/>
<button className="transition duration-150 ease-in-out ...">Button A</button>
<button className="transition duration-3000 ease-in-out ml-2 p-4 bg-slate-950 text-white hover:duration-3000">Button B</button>
<button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-slate-950 text-white p-1 ml-28">Button C</button>



</form>

<br/><br/>

<span className="relative flex h-4 w-4">
  <span className="animate-ping w-5 h-5 absolute inline-flex  rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-950"></span>
</span>

</div>
  )
}
