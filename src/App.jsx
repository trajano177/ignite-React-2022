import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';




function App() {

  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
      author="Matheus Trajano"
      content="lorem ipsum dolor sit amet, consectetur adipiscing elite"
      />

      <Post 
      author="Gabriel lorem"
      content="um novo post legal"
      />
      </main>
    </div>
  </div>
  )
}

export default App

