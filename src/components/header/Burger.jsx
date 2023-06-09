import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-yellow1 items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#573280"
                    viewBox="0 0 100 80"
                    width="30"
                    height="30"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-[50vw] bg-purple-100 text-yellow1 fixed h-full z-40  ease-in-out duration-300 flex flex-col ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <Link href='??' className=" mt-20 text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    O que fazemos?
                </Link>
                <Link href='??' className="text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    Aprenda conosco
                </Link>
                <Link href='??' className="text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    Novidades e eventos
                </Link>
                <Link href='??' className="text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    Centro de recursos
                </Link>
                <Link href='??' className="text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    Sobre o Koru
                </Link>
                <Link href='/contato' className="text-sm font-semibold text-yellow1 p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    Contato
                </Link>
            </div>
        </>
    );
};

