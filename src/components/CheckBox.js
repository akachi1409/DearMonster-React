import React from "react"

function CheckBox({ checked, children, onClick }) {
  return (
    <div className="flex flex-row">
      {onClick && typeof onClick === "function" ? (
        <div
          className="border-2 border-gray-600 bg-gray-200 w-7 h-7 cursor-pointer"
          onClick={onClick}
        >
          {checked && checked === true && (
            <span className="material-icons text-gray-800">done</span>
          )}
        </div>
      ) : (
        <div className="border-2 border-gray-600 bg-gray-200 w-7 h-7 cursor-pointer">
          {checked && checked === true && (
            <span className="material-icons text-gray-800">done</span>
          )}
        </div>
      )}
      <div className="mx-1">{children}</div>
    </div>
  )
}

export default CheckBox
