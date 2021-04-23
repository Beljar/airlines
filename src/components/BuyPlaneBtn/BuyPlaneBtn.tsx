import React from 'react';
import { connect } from 'react-redux';
import PlaneModeltype from '../../types/planeModelType';
import { buyPlane } from '../../redux/planesReducer';

type BuyPlaneProps = {
  plane: PlaneModeltype,
  buyPlane: (plane: PlaneModeltype) => void,
}

const BuyPlaneBtn: React.FC<BuyPlaneProps> = ({ plane, buyPlane }: BuyPlaneProps) => <button
  onClick={() => buyPlane(plane)}>
  Buy for {plane.price}
</button>;

const mapDispatchToProps = {
  buyPlane,
};

export default connect(null, mapDispatchToProps)(BuyPlaneBtn);
