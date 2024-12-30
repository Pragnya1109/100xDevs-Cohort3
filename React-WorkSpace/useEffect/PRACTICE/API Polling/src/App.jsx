import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState("")
  const [isFetching, setIsFetching] = useState(false)


  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")

      if (!response.ok) {
        throw new Error(`Http error!! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result.message)

    } catch (error) {
      console.error("Error fetching data: ", error)
    }
  }

  useEffect(() => {
    let intervalId;

    if (isFetching) {

      fetchData()

      intervalId = setInterval(() => {
        fetchData()
      }, 1000);
    }
    return (() => clearInterval(intervalId))
  }, [isFetching])

  return <div>

    <h1>Post Fetcher</h1>

    {data ? (
      <div>
        <img src={data} alt="A random dog" style={{ width: "300px", height: "300px" }} />
      </div>
    ) : (
      <p>No Image .. Click on Start Fetching</p>
    )}

    <button onClick={() => setIsFetching((prev) => !prev)}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
      {isFetching ? "Stop Fetching" : "Start Fetching"}
    </button>

  </div>
}

export default App