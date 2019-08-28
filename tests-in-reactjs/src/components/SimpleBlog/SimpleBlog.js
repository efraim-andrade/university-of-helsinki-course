import React, { useState } from 'react';

import { Container, Content } from './styles'

export default function SimpleBlog({blog, onClick}) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <Container data-testid="simpleblog" onClick={() => setIsHidden(false)}>
        <div>
            <div className="header">{blog.title} {blog.author}</div>
        </div>

        <Content data-testid="content" isHidden={isHidden}>
            blog has {blog.likes} likes
            <button onClick={onClick}>like</button>
        </Content>
    </Container>
  );
}
