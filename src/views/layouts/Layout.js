import React from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="mt-24 mb-2">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
