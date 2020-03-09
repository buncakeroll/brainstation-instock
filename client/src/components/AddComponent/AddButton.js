import React from "react";
import Add from "../../assets/icons/svg/Icon-add.svg";

class AddButton extends React.Component {
  render() {
    return (
      <>
        <button className="AddButton" onClick={this.props.toggleForm}>
          <img src={Add} alt="Add New" />
        </button>
      </>
    );
  }
}
export default AddButton;