import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import styles from './index.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom'

const FindMusicViews = React.lazy(() => import('views/find-music/FindMusic'))
const FindSongViews = React.lazy(() => import('views/find-music/FindSong'))
const FindDjViews = React.lazy(() => import('views/find-music/FindDj'))

const MusicDetailViews = React.lazy(() => import('views/music-detail/MusicDetail'))

type Props = {
  children?: React.ReactElement,
  history: any
}
const Layout:React.FC<Props> = (props) => {
  const { history } = props
  return (
    <div className={styles.container}>
      <Header history={history} />
      <main className={styles.main}>
        <Aside history={history} />
        <div className="music-app__container">
          <React.Suspense fallback={null}>
            <Switch>
              <Route path="/find" exact component={FindMusicViews} />
              <Route path="/find/song" exact component={FindSongViews} />
              <Route path="/find/dj" exact component={FindDjViews} />

              <Route path="/music-detail/:id" component={MusicDetailViews} />

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
