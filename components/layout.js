import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function layout({children, title = 'Map Demo'}) {
    return (
        <div className="flex flex-col h-screen">
            <Header>
                <Head>
                    <title>{ title }</title>
                </Head>
            </Header>
            <main className="mb-auto">
                { children }
            </main>
            <Footer>

            </Footer>
        </div>
    )
}
