'use client'

import Link from 'next/link'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import globalState from './global-state'

export default function Header() {

    const [page, setPage] = useState('login')
    const username = globalState((state) => state.username)

    useEffect(() => {
        if (username) setPage('logout')
        else setPage('login')
    }, [username])

    return (
        <header className='py-3'>
            <div className='container d-flex flex-wrap justify-content-center'>
                <a href='/' className='d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none'>
                    <span className='fs-4'>ServeUp!</span>
                </a>
                {
                    <button className='btn btn-outline-primary' type='button'>
                        <Link href={'/' + page}>{page}</Link>
                    </button>
                }
            </div>
        </header >
    )
}