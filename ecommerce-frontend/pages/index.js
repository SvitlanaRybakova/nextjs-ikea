import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { MdArrowForwardIos } from 'react-icons/md'

import styles from '../styles/Home.module.css'
import mainImg from '../images/PH178645-crop001.jpg'
import { ICON_SIZE } from '../utils/constants'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IKEA, everything for home </title>
        <meta name="description" content="IKEA, everything for home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <h1 className="main-header">IKEA. Live at home.</h1>
          <aside className="offer">
            <Image src={mainImg} alt="IKEA logo" width={5000} height={5000} />
            <div className="offer-extra">
              <Link href={`/categories/beds`}>
                <a>
                  <span>Check out how you can improve your sleep</span>
                  <MdArrowForwardIos size={ICON_SIZE} />
                </a>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
