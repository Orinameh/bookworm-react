import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

// class DashboardPage extends React.Component {
//   render() {
//     return (
//
//     );
//   }
// }

const DashboardPage = ({isConfirmed}) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashboardPage);
