import { useMutation } from '@redwoodjs/web'
import AddTodoForm from 'src/components/AddTodoForm'
import { QUERY as TODOS } from 'src/components/TodoListCell'


const CREATE_TODO = gql`
  mutation SaveTodo_CreateTodo($body: String!) {
    createTodo(body: $body) {
      id
      __typename
      body
      status
    }
  }
`
const SaveTodo = () => {
  const [createTodo] = useMutation(CREATE_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: TODOS })
      cache.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([createTodo]) },
      })
    },
  })

  const submitTodo = (body) => {
    createTodo({
      variables: { body },
      optimisticResponse: {
        __typename: 'Mutation',
        createTodo: { __typename: 'Todo', id: 0, body, status: 'loading' },
      },
    })
  }

  return <AddTodoForm submitTodo={submitTodo} />
}

export default SaveTodo
