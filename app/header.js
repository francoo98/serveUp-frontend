'use client'

import Link from 'next/link'
import Cookies from 'js-cookie'

export default function Header() {

    return (
        <header className='py-3'>
            <div className='container d-flex flex-wrap justify-content-center'>
                <a href='/' className='d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none'>
                    <span className='fs-4'>ServeUp!</span>
                </a>
                {
                    Cookies.get('sessionToken') ?
                        <button className='btn btn-outline-primary' type='button'><Link href='/logout'>Logout</Link></button>
                        :
                        <button className='btn btn-outline-primary' type='button'><Link href='/login'>Login</Link></button>
                }
            </div>
        </header>
    )
}