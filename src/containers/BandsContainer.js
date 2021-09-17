import React, { Component } from "react";
import BandInput from "../components/BandInput";
import Band from "../components/Band";
import { connect } from "react-redux";

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map((band) => (
      <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
    ));

  render() {
    return (
      <ul>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (name) => dispatch({ type: "ADD_BAND", name: name }),
    deleteBand: (id) => dispatch({ type: "DELETE_BAND", id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);