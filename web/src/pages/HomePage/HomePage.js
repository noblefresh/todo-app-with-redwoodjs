import styled from 'styled-components'
import { MetaTags } from '@redwoodjs/web'
import SaveTodo from 'src/components/SaveTodo'
import TodoListCell from 'src/components/TodoListCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Todos" description="Your list of todo items" />

      <SC.Wrapper>
        <SC.Title>Todo List</SC.Title>
        <TodoListCell />
        <SaveTodo />
      </SC.Wrapper>
    </>
  )
}

const SC = {}
SC.Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`
SC.Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 100px;
`

export default HomePage
