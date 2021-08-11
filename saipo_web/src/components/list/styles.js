import { colors } from "../../global/colors"

export const styles = {
    listContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "80%",
        backgroundColor: colors.active,
        borderRadius: 3,
    },

    task: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        padding: "20px 10px",
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
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