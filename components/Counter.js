import React from "react";
import { View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import { CONG } from "../redux/actions"; // Import the action creator

const Counter = ({ count, onCong }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Count: {count}</Text>
      <Pressable
        style={{ padding: 20, backgroundColor: "red" }}
        onPress={onCong}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          +
        </Text>
      </Pressable>
    </View>
  );
};

// Map state from the store to component props
const mapStateToProps = (state) => ({
  count: state.count,
});

// Map dispatch actions to component props
const mapDispatchToProps = (dispatch) => ({
  onCong: () => dispatch(CONG()), // Dispatch the action creator directly
});

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
