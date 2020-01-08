import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import Feed from './Feed';
import { when } from 'jest-when';
import { jsonResponse } from '../util/mock';

const fetchMock = jest.fn();

when(fetchMock)
    .calledWith(expect.stringContaining('users/1/posts'))
    .mockResolvedValue(
        jsonResponse([
            {
                description: 'description one',
                imageUrl: 'path/to/image'
            },
            {
                description: 'description two',
                imageUrl: 'path/to/image'
            }
        ])
    );

window.fetch = fetchMock;

describe('The feed component', () => {
    test('should render with two descriptions', async () => {
        const {getByText} = render(<Feed />);

        const description1 = await waitForElement(() => getByText('description one'));
        const description2 = await waitForElement(() => getByText('description two'));

        expect(description1).toBeInTheDocument();
        expect(description2).toBeInTheDocument();
    });
});