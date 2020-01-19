import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import styles from './index.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom'

const FindMusicViews = React.lazy(() => import('views/find-music/FindMusic'))

type Props = {
  children?: React.ReactElement
}
const Layout:React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Aside></Aside>
        <div className="container">
          <React.Suspense fallback={<p>loading</p>}>
            <Switch>
              <Route path="/find" component={FindMusicViews} />
              <Redirect from="/" to="/find" />
            </Switch>
          </React.Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default Layout
