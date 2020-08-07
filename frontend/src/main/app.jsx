import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default () => {
  return (
    <div>
      <p>
        <Menu />
        <Todo />
        <About />
      </p>
    </div>
  )
}
