//abhishek360

import {
  CHANGE_CONTROL,
} from '../constants/action-constants';

export const changeControl = (control)=>({
  type : CHANGE_CONTROL,
  control,
})
