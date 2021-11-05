import React from "react"
import Layout from "./layouts/Layout"

function MyItems() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-center text-3xl text-white my-12">My Items</h1>
        <div className="m-8 text-white">0 items available!</div>
      </div>
    </Layout>
  )
}

export default MyItems
