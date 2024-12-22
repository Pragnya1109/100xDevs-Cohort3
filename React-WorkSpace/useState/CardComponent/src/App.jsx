import { useState } from 'react'
import './App.css'
import { PostComponent } from './Components/PostComponent'
function App() {

  const [posts, setPosts] = useState([])


  const postComponent = posts.map((post) => <PostComponent key={post.id} name={post.name} title={post.title} time={post.time} profile={post.profile} description={post.description} />)

  const handlePosts = () => {
    setPosts((posts) => [...posts, {
      id: posts.length + 1,
      name: "Pragnya",
      title: "Software Developer",
      time: new Date().toLocaleTimeString(),
      profile: "https://wallpapers.com/images/featured-full/cute-profile-picture-s52z1uggme5sj92d.jpg",
      description: "Techie who plays, learns, paints, enjoys every work and loves her family"
    }])
  }

  const handleReset = () => {
    setPosts([])
  }

  return (
    <div style={styles.appContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <button onClick={handlePosts} style={styles.button}>Add Post</button>

        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>

      <div style={styles.postComponent}>
        {postComponent}
      </div>
    </div>
  )
}

const styles = {
  appContainer: {
    backgroundColor: "seashell",
    minHeight: "100vh",
    padding: "20px",
    overflow: "auto"
  },
  button: {
    padding: "10px 20px",
    marginBottom: "20px",
    backgroundColor: "#74b9ff",
    border: "none",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  },
  postComponent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}

export default App
