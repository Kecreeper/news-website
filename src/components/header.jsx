

export default function Header() {
    return (
        <header className="grid place-items-center m-4 rounded-xl bg-yellow-200/50 backdrop-blur-sm">
            <div className="max-w-1/2 bg-yellow-400/50 rounded-xl mt-3 p-2 px-3 font-serif text-4xl">
                MY TIMES
            </div>
            <div className="m-2">
                <a href="" className="px-5 border font-serif text-xl">
                    Recent Articles
                </a>
                <a href="" className="px-5 border font-serif text-xl">
                    Another Button
                </a>
            </div>
        </header>
    )
}