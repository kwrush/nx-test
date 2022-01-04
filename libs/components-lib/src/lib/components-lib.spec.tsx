import { render } from '@testing-library/react';

import ComponentsLib from './components-lib';

describe('ComponentsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsLib />);
    expect(baseElement).toBeTruthy();
  });
});
