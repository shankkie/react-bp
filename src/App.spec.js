import React from 'react';
import { render} from '@testing-library/react';
// import 'jest-dom/extend-expect';
import App from './App';


describe('App Component', function () {
    it('renders without error', function () {
        render(<App/>);
    });

});


