import { colors } from "../../global/colors"

export const styles = {
    button: {
        backgroundColor: colors.primary,
        color: colors.active,
        padding: "10px 20px",
        borderRadius: 6,
        border: "none",
        margin: "0px 5px"
    },

    buttonCancel: {
        backgroundColor: colors.cancel,
        color: colors.active,
        padding: "10px 20px",
        borderRadius: 6,
        border: "none",
        margin: "0px 5px"
    },

    modal: {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    },

    modalAction: {
        textAlign: "right"
    }
}