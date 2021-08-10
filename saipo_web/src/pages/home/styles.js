import { colors } from "../../global/colors"

export const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "80vh",
        backgroundColor: colors.background,
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "10vh",
        paddingTop: "10vh"
    },

    content: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 3px rgba(0,0,0,0.5)",
        borderRadius: 3,
        backgroundColor: colors.active,
        width: "80%",
        align: "center",
        overflow: "scroll",
        overflowX: "hidden",
    }
}