import Image from 'next/image'
import React from 'react'

function WorkProcess() {
  return (
    <>
      <section className="process bg-[#f1f3f5] py-10">
    <div className="container justify-center w-full mx-auto items-center">
        <div className="section-head text-center mb-8">
            <h2>Making Your <span className="text-black">Study Abroad Journey</span> Seamless</h2>
        </div>
        <div className="grid grid-cols-1  mx-auto">
            <div className="process-img flex w-full justify-center items-center">
                <Image src='/Assets/home-images/workprocess-transparent.avif' alt='study-abroad-working-model' height={800} width={1200}/>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default WorkProcess
