import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  searchFormText: {
    fontSize: 16,
    color: "#7B7B7B",
  },
  searchControl: {
    padding: 0, // Remove default padding on TextInput
  },
  searchButton: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: 80,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };