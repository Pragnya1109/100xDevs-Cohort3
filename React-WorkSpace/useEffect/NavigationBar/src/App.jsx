import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        const data = await response.json();
        setTabData((prev) => ({ ...prev, [currentTab]: data.message }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!tabData[currentTab]) {
      fetchData();
    }
  }, [currentTab, tabData]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            style={{
              ...styles.button,
              ...(currentTab === tab ? styles.activeButton : styles.inactiveButton),
            }}
          >
            Menu #{tab}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {tabData[currentTab] ? (
          <img
            src={tabData[currentTab]}
            alt={`Dog for tab ${currentTab}`}
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    fontSize: "16px",
    margin: "5px",
  },
  activeButton: {
    backgroundColor: "#cd9575",
    color: "black",
  },
  inactiveButton: {
    backgroundColor: "sienna",
    color: "white",
  },
};

export default App;
