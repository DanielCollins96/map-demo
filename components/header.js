import React from 'react'
import Link from 'next/link'

export default function header() {
    return (
        <div class="flex items-center justify-between bg-indigo-600 p-3">
            <div className="flex items-center">

                <img src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png" width="50" alt="logo" className="mr-4"/>
                    <Link href="/" >
                        <a className="mr-4 text-black hover:text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="mr-4 text-black hover:text-white">About</a>
                    </Link>
                    <Link href="/map">
                        <a className="text-black hover:text-white">Map</a>
                    </Link>
            </div>
            <div>
                <Link href="/login">
                    <a className="mr-4 text-black hover:text-white">Login</a>
                </Link>
                <Link href="/signup">
                    <a className="py-2 px-4 bg-yellow-400 rounded hover:bg-yellow-300">Sign Up</a>
                </Link>
            </div>
        </div>
    )
} 



