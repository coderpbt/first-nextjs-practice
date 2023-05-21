import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, activeClassName, children }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a className={isActive ? activeClassName : ''}>{children}</a>
    </Link>
  );
};

export default NavLink;
