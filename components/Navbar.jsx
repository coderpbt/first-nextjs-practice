import Link from 'next/link';
import React from 'react';
import NavLink from './Shared/NavLink/NavLink';

const Navbar = () => {
    return (
        <section className='header-area'>
            <div className="container">
                <div className="header-main">
                    <div className="logo">
                        <a href="/">Next Js</a>
                    </div>
                    <div className="main-menu">
                        {/* <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="#">Dropdown</Link>
                                <ul>
                                    <li><Link href="/about">drop page1</Link></li>
                                    <li><Link href="/blog">drop page2</Link></li>
                                    <li><Link href="/projects">drop page3</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/experience"> Experience</Link></li>
                            <li><Link href="/profile/orderhistory"> Profile</Link></li>
                        </ul> */}
                        <ul>
                            <li><NavLink href="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink href="/about" activeClassName="active">About</NavLink></li>
                            <li><NavLink href="/projects" activeClassName="active">Projects</NavLink></li>
                            <li><NavLink href="/blog" activeClassName="active">Blog</NavLink></li>
                            <li><NavLink href="#" activeClassName="active">Dropdown</NavLink>
                                <ul>
                                   <li><NavLink href="/about" activeClassName="active">Page 1</NavLink></li>
                                   <li><NavLink href="/blog" activeClassName="active">Page 2</NavLink></li>
                                   <li><NavLink href="/projects" activeClassName="active">Page 3</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink href="/experience" activeClassName="active">Experience</NavLink></li>
                            <li><NavLink href="/profile/orderhistory" activeClassName="active">Profile</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;