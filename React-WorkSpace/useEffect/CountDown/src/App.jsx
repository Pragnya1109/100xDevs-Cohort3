import { useState, useEffect } from "react"

function App() {

  const [timeLeft, setTimeLeft] = useState(60)
  const [isRunning, setIsRunning] = useState(true)
  const [inputTime, setInputTime] = useState("")

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return

    const timerId = setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [timeLeft, isRunning])

  const startTimer = () => {
    if (inputTime > 0) {
      setTimeLeft(Number(inputTime))
      setIsRunning(true)
    }
  }

  const resetTimer = () => {
    setTimeLeft(0);
    setIsRunning(false)
    setInputTime("")
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center"
      }}
    >
      <h1> CountDown Timer </h1>
      <div>
        <input
          type="number"
          placeholder="Enter time in seconds"
          value={inputTime}
          style={{
            padding: "10px 15px",
            borderRadius: "10px",
            border: "none",
            fontSize: "1rem",
            outline: "none",
            marginRight: "10px",
          }}
          onChange={(e) => setInputTime(e.target.value)} />

        <button
          onClick={startTimer}
          style={{
            ...buttonStyles,
            backgroundColor: "#38a3a5",
            boxShadow: "0 4px 8px rgba(56,163,165,0.6)",
            marginBottom: "20px"
          }}
        >Start</button>

        <div
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            padding: "20px 40px",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            marginBottom: "40px",
          }}
        >
          {timeLeft > 0 ? formatTime(timeLeft) : "00:00"}
        </div>

        <div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            disabled={timeLeft === 0}
            style={{
              ...buttonStyles,
              backgroundColor: isRunning ? "#ff6b6b" : "#38a3a5",
              boxShadow: isRunning
                ? "0 4px 8px rgba(255, 107, 107, 0.6)"
                : "0 4px 8px rgba(56, 163, 165, 0.6)",
            }}
          >
            {isRunning ? "Pause" : "Resume"}
          </button>

          <button
            onClick={resetTimer}
            style={{
              ...buttonStyles,
              backgroundColor: "#457b98",
              marginLeft: "15px",
              boxShadow: "0 4px 8px rgba(69, 123, 157, 0.6)",
            }}
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  </div>
}
const buttonStyles = {
  padding: "15px 30px",
  fontSize: "1.2rem",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  color: "#fff",
  fontWeight: "500",
  transition: "all 0.3s ease",
}
export default App