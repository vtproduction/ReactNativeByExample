import { Navigator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    editTaskContainer: {
        flex: 1,
        paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight
    },
    editTaskText: {
        fontSize: 36
    },
    clearDateButtonContainer:{
        flex: 1
    }
});

export default styles;