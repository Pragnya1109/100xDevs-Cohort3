export function PostComponent({ name, title, time, profile, description }) {
    return (
        <div style={styles.card}>
            <div style={styles.profileHeader}>

                <img src={profile} alt="profile"
                    style={styles.image} />

                <div>
                    <div style={styles.name}>{name}</div>
                    <div style={styles.title}>{title}</div>
                    <div style={{ fontSize: "12px" }}>{time}</div>
                </div>
            </div>
            <p style={{ fontSize: "14px", margin: "0" }}>{description}</p>
        </div>
    )

}

const styles = {
    card: {
        border: "1px solid black",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "white",
        maxWidth: "400px"
    },
    profileHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px"
    },
    image: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px"
    },
    name: {
        fontWeight: "bold",
        fontSize: "14px"
    },
    title: {
        fontWeight: "gray",
        fontSize: "12px"
    },
}