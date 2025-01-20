import { useRef, useState } from "react"
import { Link } from "react-router-dom"


const TopNav = () => {
  const [query, setQuery] = useState("");
  useRef
  console.log(query)


  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 rounded-md text-xl outline-none border-none bg-transparent text-zinc-100" type="text" placeholder="Search anything" />


      {query.length > 0
        &&
        <i onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill">
        </i>}




      <div className="w-[50%] absolute max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded-md">
        {/* <Link className="hover:text-zinc-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-800 bg-zinc-100 w-full p-10 flex justify-start items-center  border-b-2 border-zinc-200">
          <img src="" alt="" />
          <span>Hello everyone</span>
        </Link> */}
   
      </div>

    </div>
  )
}

export default TopNav;