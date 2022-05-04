import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="d-flex flex-column h-100 w-100">
            <div>
                <Header></Header>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
                {children}
            </div>
        </div>
    )
}

export default Layout