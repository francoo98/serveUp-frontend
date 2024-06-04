'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Logout() {

    const [wasLoggedOut, setWasLoggedOut] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetch('http://localhost:3001/api/user/logout', { method: 'POST', credentials: 'include' })
            .then((response) => {
                if (response.status === 200) {
                    setWasLoggedOut(true)
                }
                else setWasLoggedOut(false)
            })
            .then(() => {
                router.push('/')
            })
    })

    return
}