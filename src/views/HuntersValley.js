import React from "react"

import Layout from "./layouts/Layout"
import Alert from "../components/Alert"
import Button from "../components/Button"

function HuntersValley() {
  return (
    <Layout>
      <Alert text="Announcement: Player A revealed a monster in the cave!" />
      <div className="my-8">
        <h1 className="text-center text-3xl text-white mt-10">
          Hunter's Valley
        </h1>
        <h1 className="text-center text-xl text-white my-2">
          Reveal your monster within the cavel!
        </h1>
        <h1 className="text-center text-xl text-white my-2">Good Luck!</h1>
        <div className="flex lg:flex-row justify-center flex-col">
          {/* Block */}
          <div className="flex bg-gray rounded-2xl p-6 custom-border border-4 flex-col m-8">
            <div className="h-24"></div>
            <h1 className="text-2xl text-center my-8">Elemental Cave</h1>
            <div className="lg:w-60">
              <div className="flex flex-row justify-between my-1">
                <span className="font-bold">Price</span>
                <span className="color-blue font-bold">48,000</span>
              </div>
              <div className="flex flex-row justify-between my-1">
                <span className="font-bold">Created</span>
                <span className="color-blue font-bold">21,355</span>
              </div>
              <div className="flex flex-row justify-between my-1">
                <span className="font-bold">Limit</span>
                <span className="color-blue font-bold">26,355</span>
              </div>
              <div className="flex flex-row justify-between my-1">
                <span className="font-bold">Payment</span>
                <span className="color-blue font-bold">26,355</span>
              </div>
            </div>
            <Button title="Connect" classes="p-1 my-4 bg-blue" />
            <h1 className="text-center font-bold">Buy DMS</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HuntersValley
