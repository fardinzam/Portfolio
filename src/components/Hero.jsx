const Hero = () => {
    return (
      <div className="w-full h-full relative flex flex-col">
        <div className="w-1/5 h-full flex items-end border-r-[1px] border-portfolio-alabaster">
          <div className="min-h-[712px] m-8 grid grid-cols-1 content-end">
            <p className="text-xl font-bold">Fardin Zaman</p>
            <p className="mb-5">Portfolio</p>
            <p>Hi, I'm Dean, a student studying at UC Riverside. I'm majoring in Computer Science w/ Business Applicatons. I'm eager to leverage technology to drive innovative solutions and leave my mark on ___</p>
          </div>
        </div>
        <p className="absolute left-[13.5%] -top-[10%] text-[350px] font-black">fardin</p>
        <p className="absolute -right-[5%] text-[350px] font-extrabold -bottom-24">zaman</p>
      </div>
    );
}

export default Hero;