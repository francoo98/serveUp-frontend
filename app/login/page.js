'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if (response.ok) {
            router.push('/')
        }
    }

    return (
        <>
        <div className="container">
            <form>

                <div className="form-outline mb-4">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                    <label className="form-label">
                        Username
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    <label className="form-label">
                        Password
                    </label>
                </div>

                <button type="button" onClick={login} className="btn btn-primary btn-block mb-4">
                Log in
                </button>
            </form>
        </div>
        </>
    )
}