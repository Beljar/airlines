import PlaneModelType from '../types/planeModelType';

const BUY = 'buy';

export const planesReducer = (state = { planes: [] }, action) => {
  switch (action.type) {
    case BUY:
      console.log(`bought ${action.value.name}`);
      state.planes.push(action.value);
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
