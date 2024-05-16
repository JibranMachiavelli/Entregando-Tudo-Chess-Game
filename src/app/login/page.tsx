'use client'

import Link from "next/link";

export default function Login() {
    return (
        <div>
            <h1 className="bg-red-600">Hello word login</h1>
            <div className="bg-blue-600 text-2xl">
                <Link className="border" href="./">
                    Initial Page
                </Link>
            </div>
        </div>
    );
}
