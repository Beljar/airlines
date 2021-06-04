import PlaneModelType from '../types/planeModelType';
import PlaneType from '../types/planeType';
import Plane from '../models/planeModel';

const BUY = 'buy';
const FILTERS = {
  MANUFACTURER: 'manufacturer',
}

export const planesReducer = (state: { planes: PlaneType[] } = { planes: [] }, action) => {
  switch (action.type) {
    case BUY:
      console.log(`bought ${action.value.name}`);
      state.planes.push(Plane(action.value.id));
      console.log(state.planes);
      return state;
    case FILTERS.MANUFACTURER:
      console.log(action.value);
      return state;
    default:
      return state;
  }
};

export type BuyPlaneType = {
  type: typeof BUY,
  value: PlaneModelType,
}

export const buyPlane = (plane: PlaneModelType): BuyPlaneType => ({
  type: BUY,
  value: plane,
});
