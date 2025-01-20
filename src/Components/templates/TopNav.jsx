

const TopNav = () => {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input className="w-[50%] mx-10 p-5 rounded-md text-xl outline-none border-none bg-transparent text-zinc-100" type="text" placeholder="Search anything" />
      <i className="text-3xl text-zinc-400 ri-close-fill"></i>

    </div>
  )
}

export default TopNav