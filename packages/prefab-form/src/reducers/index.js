/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { call } from '@airglow/reducers';
import * as T from '../actions';
import valueChangeReducer from './value.change.reducer';
import blurReducer from './blur.reducer';
import focusReducer from './focus.reducer';
import submitReducer from './submit.reducer';
import resetReducer from './reset.value.reducer';

export default call(
  call(valueChangeReducer).for(T.VALUE_CHANGE),
  call(blurReducer).for(T.BLUR),
  call(focusReducer).for(T.FOCUS),
  call(submitReducer).for(T.FIELD_SUBMIT),
  call(resetReducer).for(T.RESET)
);
