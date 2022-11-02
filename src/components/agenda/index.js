import { useEffect, useState, useContext } from 'react';
import './Agenda.css';
import TodoList from './todoList';
import AddTodo from './addTodo';
import EditTodo from './editTodo';
import TodoService from '../../services/TodoService';
import useTodo from '../../hooks/useTodo';
import { TableContainer, Table, TableBody } from '@mui/material';
import LoginContext from '../../context/LoginContext';
import Header from '../header';
import Footer from '../footer';

function Agenda() {
  const { todos, setTodos, addTodo, editTodo, deleteTodo } =
    useTodo();
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditTodo] = useState({});
  const todoService = new TodoService();
  const context = useContext(LoginContext);

  function getTodos() {
    todoService.getTodos(context.values.email[0]).then((res) => {
      setTodos(res);
    });
  }

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    todoService
      .addTodo({
        name: name,
        description: 'soy dummy',
      })
      .then((res) => {
        console.log(res);
        addTodo(res);
      });
    e.target.reset();
  }

  function onEdit(todo) {
    setEdit(true);
    setEditTodo(todo);
  }

  function onSubmitEdit(editedTodo) {
    // call api to edit row in db
    // replace that item in the list of todos
    editTodo(editedTodo);
    setEdit(false);
    setEditTodo({});
  }

  function onDelete(id) {
    // call api to delete row in db
    // delete the item form the list of todos only if the api responds with successnpm start

    deleteTodo(id);
  }

  return (
    <>
      <Header />
      <div className="App">
        <div className="container">
          <h2>Agenda</h2>
          <div className="section">
            <div className="AddEdit">
              {edit ? (
                <EditTodo
                  item={editedTodo}
                  onSubmitEdit={onSubmitEdit}
                  onCancel={() => setEdit(false)}
                />
              ) : (
                <AddTodo onSubmit={onSubmit} />
              )}
            </div>
            <div>
              <TableContainer>
                <Table
                  sx={{ minWidth: 100, marginBottom: 10 }}
                  aria-label="simple table"
                >
                  <TableBody>
                    <TodoList
                      todos={todos}
                      onDelete={onDelete}
                      onEdit={onEdit}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agenda;
