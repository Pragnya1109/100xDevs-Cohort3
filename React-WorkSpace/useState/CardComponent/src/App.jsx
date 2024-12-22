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

  return (
    <div style={{ backgroundColor: "seashell", minHeight: "100vh", padding: "20px", overflow: "auto" }}>
      <button onClick={handlePosts} style={{ padding: "10px 20px", marginBottom: "20px", backgroundColor: "#74b9ff", border: "none", color: "white", borderRadius: "5px", cursor: "pointer" }}>Add Post</button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {postComponent}
      </div>
    </div>
  )
}

export default App
