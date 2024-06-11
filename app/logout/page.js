'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import globalState from '../global-state'

export default function Logout() {
    const logout = globalState((state) => state.logout)
    const router = useRouter()

    useEffect(() => {
        if(logout()) router.push('/')
    })

    return
}