import React from 'react'

function HeaderIcon({ Icon, active }) {
    return (
      <div
        className="flex items-center cursor-pointer md:px-10 sm:h-14 sm:px-4 md:hover:bg-gray-100 rounded-xl group"
      >
        <Icon className={`h-5 text-gray-500 text-center 
        mx-auto group-hover:text-blue-500 
        ${active && "text-blue-500"}`} />
      </div>
    );
}

export default HeaderIcon