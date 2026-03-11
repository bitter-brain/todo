import Field from '../../shared/ui/Field/Field.jsx'
import { useContext } from 'react'
import { TasksContext } from '../../entities/todo/model/TasksContext.jsx'

const SearchTaskForm = () => {
  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TasksContext)
  return(
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm