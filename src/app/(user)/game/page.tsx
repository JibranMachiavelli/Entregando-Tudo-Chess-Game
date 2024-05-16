'use client'

import Link from "next/link";

export default function Game() {
    return (
        <div>
            <h1 className="bg-red-600">Hello word game</h1>
            <div className="bg-blue-600 text-2xl">
                <Link className="border" href="./">
                    Initial Page
                </Link>
            </div>
        </div>
    );
}
