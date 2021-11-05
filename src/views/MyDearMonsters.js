import React from "react"
import Layout from "./layouts/Layout"

function MyDearMonsters() {
  const [tab, setTab] = React.useState(0)
  function onClick(index) {
    setTab(index)
  }
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-center text-3xl text-white my-12">
          My DearMonsters
        </h1>
        <div className="m-8">
          <div className="flex flex-row border-b-2 border-white justify-around text-white mx-8 cursor-pointer">
            {tab === 0 ? (
              <h1
                className="flex flex-1 justify-center p-2 bg-blue"
                onClick={() => onClick(0)}
              >
                All
              </h1>
            ) : (
              <h1
                className="flex flex-1 justify-center p-2"
                onClick={() => onClick(0)}
              >
                All
              </h1>
            )}
            {tab === 1 ? (
              <h1
                className="flex flex-1 justify-center p-2 bg-blue"
                onClick={() => onClick(1)}
              >
                Available
              </h1>
            ) : (
              <h1
                className="flex flex-1 justify-center p-2"
                onClick={() => onClick(1)}
              >
                Available
              </h1>
            )}
            {tab === 2 ? (
              <h1
                className="flex flex-1 justify-center p-2 bg-blue"
                onClick={() => onClick(2)}
              >
                In Order
              </h1>
            ) : (
              <h1
                className="flex flex-1 justify-center p-2"
                onClick={() => onClick(2)}
              >
                In Order
              </h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyDearMonsters
