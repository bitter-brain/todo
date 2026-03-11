import { useContext } from 'react'
import AddTaskForm from '../../features/add-task/AddTaskForm.jsx'
import SearchTaskForm from '../../features/search-task/SearchTaskForm.jsx'
import TodoInfo from '../../features/stats/TodoInfo.jsx'
import TodoList from '../../entities/todo/ui/TodoList/TodoList.jsx'
import Button from '../../shared/ui/Button/Button.jsx'
import { TasksContext } from '../../entities/todo/model/TasksContext.jsx'

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  )
}

export default Todo