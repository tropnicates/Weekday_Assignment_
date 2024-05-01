export const APPLY_FILTER = 'APPLY_FILTER';

export const applyFilter = (filter) => ({
  type: APPLY_FILTER,
  payload: filter
});
