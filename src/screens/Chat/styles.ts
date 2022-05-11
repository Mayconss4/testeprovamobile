import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  rowSearch: {
    flexDirection: "row",
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    width: "75%",
    height: 45,
    marginTop:30
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  input: {
    width: "50%"
  }
});

export default styles