import React from 'react';
import {render} from '@testing-library/react';
import Feed from './Feed';
import {when} from 'jest-when';

const fetchHooks = require('../hooks/useFetch');

const useFetchMock = jest.fn();

when(useFetchMock)
    .calledWith('users/1/posts')
    .mockReturnValue([
            {
                description: 'description one',
                imageUrl: 'path/to/image'
            },
            {
                description: 'description two',
                imageUrl: 'path/to/image'
            }
        ]
    );

fetchHooks.useFetch = useFetchMock;

describe('The feed component', () => {
    test('should render with two descriptions', async () => {
        const {getByText} = render(<Feed />);

        expect(getByText('description one')).toBeInTheDocument();
    });
});