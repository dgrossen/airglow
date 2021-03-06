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

import selector from '../../../src/selectors/select.should.validate';

const makeState = (whenToValidate, hasFocussed, hasBlurred, hasSubmit) => ({
  prefab: { zipper: {
    construct: { whenToValidate },
    store: { hasFocussed, hasBlurred, hasSubmit }
  } }
});

describe('SelectShouldValidate', () => {
  it('should not validate by default', () => {
    expect(selector('zipper', makeState())).toBe(false);
  });
  it('should use a custom shouldValidate function', () => {
    expect(selector('zipper', makeState(() => true))).toBe(true);
  });
  it('should always validate when always', () => {
    expect(selector('zipper', makeState('always'))).toBe(true);
  });
  it('should validate on focus when focus', () => {
    expect(selector('zipper', makeState('focus', true))).toBe(true);
  });
  it('should validate on blur when focus', () => {
    expect(selector('zipper', makeState('focus', false, true))).toBe(true);
  });
  it('should validate on blur when blur', () => {
    expect(selector('zipper', makeState('blur', false, true))).toBe(true);
  });
  it('should validate on submit when submit', () => {
    expect(selector('zipper', makeState('submit', false, false, true))).toBe(true);
  });
});
