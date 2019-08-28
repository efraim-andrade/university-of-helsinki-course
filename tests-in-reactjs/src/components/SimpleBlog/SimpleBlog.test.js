import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
  let component
  const props = {
    blog: {
      title: "My Blog",
      author: "Efraim Andrade",
      likes: 3
    },
    onClick: jest.fn()
  }

  beforeEach(() => {
    component = render(<SimpleBlog  blog={props.blog} onClick={props.onClick}/>)
  })

  it('should be able to render with props', () => {
    const { getByText } = component

    expect(getByText('My Blog Efraim Andrade')).toBeDefined()
    expect(getByText('blog has 3 likes')).toBeDefined()
  })

  it('should be able to like the blog', () => {
    const { getByText } = component

    fireEvent.click(getByText('like'))
    fireEvent.click(getByText('like'))

    expect(props.onClick.mock.calls.length).toBe(2)
  })

  it('should be content hidden by default', () => {
    const { getByTestId } = component

    const content = getByTestId('content')

    expect(content).toHaveStyle('display: none')
  })

  it('should be content show when click in the blog', () => {
    const { getByTestId } = component
    
    const content = getByTestId('content')
    fireEvent.click(getByTestId('simpleblog'))

    expect(content).toHaveStyle('display: block')
  })
})