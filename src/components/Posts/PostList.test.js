import React from 'react';
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'; 
import { unmountComponentAtNode } from "react-dom";
import PostList from './PostList'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const list = [
    {id: 1, title: 'lorem ipsum', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo. Ea, consequatur molestiae quod sunt porro aspernatur dignissimos tenetur libero?'},
    {id: 0, title: 'post2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo. Ea, consequatur molestiae quod sunt porro aspernatur dignissimos tenetur libero?'}
]

describe("PostsList", () => {
    it ('matches snapshot with posts', () => {

        const component = render(<PostList list={list} />)

        expect(component).toMatchSnapshot()
    })

    it ('list should contain 2 posts', () => {
        
        act(() => {
            render(<PostList list={list} />, container)
        })

        const posts = document.getElementsByClassName('post')

        expect(posts.length).toBe(2)
    })
})

    