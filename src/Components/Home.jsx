// import React from 'react'

import Sidenav from "./templates/Sidenav";

const Home = () => {
  document.title = "IMDB-Clone | Homepage";
  return (

    <>
      <Sidenav />
      <div className="w-[80%] h-full "></div>

    </>
  )
}

export default Home