import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const ContainerBlock = ({children, ...customMeta}) => {
    const meta = {
        title: "Yeasin - Developer, Writer, Creator and YouTuber",
        description: `Discover your ultimate escape at our resort and convention center near Dhaka in Bangladesh, where luxury meets nature. Enjoy unparalleled comfort & breathtaking views`,
        ...customMeta
      };
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="/fav-icon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content={meta.description}
                />
                <meta name="keywords" content="next project" />
                <link rel="apple-touch-icon" href="/fav-icon.ico" />
                <title>{meta.title}</title>
            </Head>
            <main className="dark:bg-gray-800 w-full">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </main>
      </>
    );
};

export default ContainerBlock;