import { useState } from 'react';
import { Button, Container, Flex, Input, Item, Spacer } from "./styled";
import { GlobalStyle } from '../../styles/global';

export function Task() {

  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };


    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

        {listTask.map((task) =>  ( 
      <ul className='lista' key={task.id}>
          <>
            <Item  checked={task.checked} >
              <p>{task.task}</p>
              <Flex>
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check "></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bx-trash "></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />

          </>
      </ul>
        ))}
    </Container>
  );
}

