export default function Root() {
    return (
      <>
        <header className="border z-10 grid place-items-center bg-yellow-200/50 backdrop-blur-sm">
              <div className="max-w-1/2 bg-yellow-400/50 rounded-xl mt-3 p-2 px-3 font-serif text-4xl font-bold underline decoration-4">
                  MY TIMES
              </div>
              <div className="m-2">
                  <a href="/" className="px-5 border font-serif text-xl">
                      Front Page
                  </a>
                  <a href="" className="px-5 border font-serif text-xl">
                      Another Button
                  </a>
              </div>
          </header>
      </>
    );
  }