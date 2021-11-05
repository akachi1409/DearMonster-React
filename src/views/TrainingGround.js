import React from "react"
import Layout from "./layouts/Layout"
import Button from "../components/Button"

function TrainingGround() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-center text-3xl text-white my-12">
          Training Ground
        </h1>
        <div className="flex flex-1 lg:flex-row justify-center flex-col">
          {/* Start Block */}
          <div className="flex flex-col mx-8">
            <span className="text-white text-center text-2xl mx-2 my-16">
              Monster
            </span>
            <span className="text-white text-center text-xl mx-2 my-8">
              Hell Bogger
            </span>
            <div className="flex flex-col focus:bg-opacity-60 text-center rounded-2xl bg-white custom-border p-8 border-4 m-2">
              <span className="font-bold my-2">Win Rate: 70%</span>
              <span className="font-bold my-2">
                Reward Estimated: 1.0 ~ 2.0
              </span>
              <span className="font-bold my-2">Exp Gain: 2-245</span>
              <Button title="Fight" classes="my-4 p-1 w-full bg-blue" />
            </div>
          </div>
          {/* End Block */}
          {/* Start Block */}
          <div className="flex flex-col mx-8">
            <span className="text-white text-center text-2xl mx-2 my-16">
              Monster
            </span>
            <span className="text-white text-center text-xl mx-2 my-8">
              Hell Bogger
            </span>
            <div className="flex flex-col focus:bg-opacity-60 text-center rounded-2xl bg-white custom-border p-8 border-4 m-2">
              <span className="font-bold my-2">Win Rate: 70%</span>
              <span className="font-bold my-2">
                Reward Estimated: 1.0 ~ 2.0
              </span>
              <span className="font-bold my-2">Exp Gain: 2-245</span>
              <Button title="Fight" classes="my-4 p-1 w-full bg-blue" />
            </div>
          </div>
          {/* End Block */}
        </div>
      </div>
    </Layout>
  )
}

export default TrainingGround
