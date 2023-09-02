const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 font-semibold mb-5">
      <div>
        <h1 className="text-5xl text-[#3b7ddd]">Compssa | blog</h1>
        <h2 className="mt-5 md:mt-2 text-gray-400">
          Welcome to {" "}
          <span className="underline decoration-2 decoration-[#0179a8]">
            Every Alumini&#39;s
          </span>
          &nbsp;favourite blog.
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Latest news | Campus feeds | Upcoming events | Entertainment ...
      </p>
    </div>
  )
}

export default Banner