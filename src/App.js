import { useDispatch, useSelector } from "react-redux";
import { errorHandling, selectAllTodo, setTodos } from "./features/todoSlice";
import axios from "axios";
import { useCallback, useEffect } from "react";

function App() {
  const { data } = useSelector(selectAllTodo);
  const dispach = useDispatch();

  const getTodos = useCallback(async () => {
    try {
      const data = await axios.get('http://localhost:5000/todos');
      dispach(setTodos(data.data))
    } catch (error) {
      dispach(errorHandling(error))
    }
  }, [dispach]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
