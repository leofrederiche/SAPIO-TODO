export const styles = {
    listContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "80%",
        paddingLeft: "10%",
        paddingRight: "10%",
        borderRadius: 3,
        overflow: "scroll",
        overflowX: "hidden",
    },

    task: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        padding: "20px 10px",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderStyle: "solid",
        borderColor: "#eee",
    },

    checkbox: {
        transform: "scale(1.6)",
        margin: "0px 10px"
    },

    taskData: {
        width: "50%"
    },

    taskOwner: {
        width: "20%",
        textAlign: "center",
    },

    taskMail: {
        width: "30%",
        textAlign: "center",
    }
}