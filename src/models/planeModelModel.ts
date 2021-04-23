import PlaneModelType from '../types/planeModelType';

const PlaneModel: () => PlaneModelType = () => ({
  id: '',
  name: '',
  passCapacity: 0,
  speed: 0,
  price: 0,
  range: 0,
  fuelPerSeat: 0,
});

export default PlaneModel;
