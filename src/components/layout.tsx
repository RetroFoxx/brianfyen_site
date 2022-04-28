import * as React from 'react'
import { Link } from 'gatsby'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout