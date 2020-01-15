import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'

type Props = {
  children?: React.ReactElement
}
const Layout:React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <Aside></Aside>
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
export default Layout
