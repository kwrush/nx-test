import { render } from '@testing-library/react';

import ComponentLibTest from './component-lib-test';

describe('ComponentLibTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentLibTest />);
    expect(baseElement).toBeTruthy();
  });
});
