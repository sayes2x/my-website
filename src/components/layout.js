import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/reset.css'
import '../styles/index.css'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
      <Header />
      {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout