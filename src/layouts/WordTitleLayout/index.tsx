import React from 'react';

type Props = {
    children: JSX.Element | ChildNode
}

function Layout(props: Props) {
  return (
    <header className='mt-9'>
        {props.children}
    </header>
  )
}

export default Layout