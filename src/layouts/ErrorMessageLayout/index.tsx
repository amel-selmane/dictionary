import React, { ReactNode } from 'react'

type Props = {
    children: JSX.Element | ReactNode
}

function Layout(props: Props) {
    const { children } = props;

  return (
    <div>{ children }</div>
  )
}

export default Layout