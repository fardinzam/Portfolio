const Projects = () => {
    return (
      <div className="">
        <div className="w-full h-32 flex items-center border-y-[1px] ">
          <div className="min-w-[20%] h-full flex border-r-2 border-portfolio-alabaster">
            <p className="m-auto text-5xl font-semibold">works</p>
          </div>
          <div className="w-full h-full bg-[radial-gradient(#E2E2DA_3px,transparent_4px)] [background-size:20px_20px]"></div>
        </div>

        <div className="w-full h-64 border-b-[1px] border-b-portfolio-alabaster flex">
          <div className="min-w-[20%] h-full flex border-r-2 border-portfolio-alabaster overflow-hidden grid grid-cols-1 content-end">
            <p>Hi, I'm Dean, a student studying at UC Riverside. I'm majoring in Computer Science w/ Business Applicatons. I'm eager to leverage technology to drive innovative solutions and leave my mark on ___</p>
          </div>
          <div>picture</div>
        </div>
        <div>project 2</div>
      </div>
    );
}

export default Projects;