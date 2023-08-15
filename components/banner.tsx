const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 font-bold mb-10">
      <div>
        <h1 className="text-7xl">Compssa | blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to {" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Alumini&#39;s
          </span>
          &nbsp;favourite blog 
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New products | latest news | amazing connections
      </p>
    </div>
  )
}

export default Banner