import Calltoaction from '@/Components/Calltoaction'
import Destinations from '@/Components/Destinations'
import React from 'react'

function page() {
  return (
    <>
      <section className="page-head ">
        <div className="head-overlay py-36 ">
          <div className="container mx-auto justify-center align-center">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <h1 className="text-4xl font-bold text-center text-white">
                  Top Study Abroad Destinations
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Destinations />
      <Calltoaction />
    </>
  )
}

export default page
