export function PostComponent({ name, title, time, profile, description }) {
    return (
        <div style={{ border: "1px solid black", borderRadius: "8px", padding: "15px", margin: "10px 0", backgroundColor: "white", maxWidth: "400px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>

                <img src={profile} alt="profile"
                    style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }} />

                <div>
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>{name}</div>
                    <div style={{ fontWeight: "gray", fontSize: "12px" }}>{title}</div>
                    <div style={{ fontSize: "12px" }}>{time}</div>
                </div>
            </div>
            <p style={{ fontSize: "14px", margin: "0" }}>{description}</p>
        </div>
    )

}