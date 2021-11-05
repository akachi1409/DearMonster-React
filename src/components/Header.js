import React from "react"
import { Link } from "react-router-dom"

import Button from "./Button"
import Logo from "../logo.svg"

function Header() {
  const [invertoryHover, setInventoryHover] = React.useState(false)
  let timer = null
  return (
    <nav className="flex flex-row items-center py-4 text-white bg-blue justify-between px-8 fixed top-0 w-full">
      <div className="flex flex-row">
        <div className="font-bold">
          <Link to="/">
            <img src={Logo} width={60} alt="DearMonsters" />
          </Link>
        </div>
        <ul className="lg:flex-row lg:flex hidden m-4">
          <li className="mx-6">
            <Link to="/">Hunter's Valley</Link>
          </li>
          <li className="mx-6">
            <Link to="/market_place">MarketPlace</Link>
          </li>
          <li
            className="mx-6 cursor-pointer"
            onMouseOver={() => {
              clearTimeout(timer)
              setInventoryHover(true)
            }}
            onMouseOut={() => {
              timer = setTimeout(() => {
                setInventoryHover(false)
              }, 500)
            }}
          >
            Inventory
            {invertoryHover && (
              <div className="bg-blue my-1 p-2 absolute top-20">
                <ul className="text-white">
                  <li className="p-2">
                    <Link to="/my_dear_monsters">My DearMonsters</Link>
                  </li>
                  <li className="p-2">
                    <Link to="/my_items">My Items</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="mx-6">
            <Link to="/training_ground">Training Ground</Link>
          </li>
          <li className="mx-6">
            <Link to="/more">More</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <span className="p-2 mx-4">1 DMS = $1.9034</span>
        <Button title="Connect" classes="px-4 py-2 alert-info" />
      </div>
    </nav>
  )
}

export default Header
