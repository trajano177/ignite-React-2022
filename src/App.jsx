import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

// author: {avatar_url: "", name: "", role""}
//publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/trajano177.png',
      name: 'Matheus Trajano',
      role: 'CEO da propria vida'
    },

    content: [
       
          {type: 'paragraph', content: 'Fala galeraa 👋',},
       
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

          {type: 'link', content: 'jane.design/doctorcare'},
    ],

    publishedAt: new Date(2022-12-21),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/mateuslouback.png',
      name: 'Mateus Louback',
      role: 'CEO dev'
    },

    content: [
       
          {type: 'paragraph', content: 'Fala galeraa 👋',},
       
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

          {type: 'link', content: 'jane.design/doctorcare'},
    ],

    publishedAt: new Date(2022-12-21),
  },
]


function App() {

  return (
    <div>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return (<Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
      })}
      </main>
    </div>
  </div>
  )
}

export default App

