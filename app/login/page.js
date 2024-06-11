'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import globalState from '../global-state'

export default function Login() {

    const router = useRouter()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = globalState((state) => state.login)

    async function handleLogin() {
        const success = await login(username, password)
        if (success) router.push('/')
    }

    return (
        <>
        <div className='container'>
            <form>

                <div className='form-outline mb-4'>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' />
                    <label className='form-label'>
                        Username
                    </label>
                </div>

                <div className='form-outline mb-4'>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                    <label className='form-label'>
                        Password
                    </label>
                </div>

                <button type='button' onClick={handleLogin} className='btn btn-primary btn-block mb-4'>
                Log in
                </button>
            </form>
        </div>
        </>
    )
}