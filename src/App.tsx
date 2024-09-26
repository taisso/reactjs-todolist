import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";
import Header from "./components/Header";
import { ItemProps, List } from "./components/List";
import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [list, setList] = useState<ItemProps[]>([]);

  const handleRemoveItem = (index: number) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNewTodoList = (evt: FormEvent) => {
    evt.preventDefault();

    const newTodoItem: ItemProps = {
      title: newTodo,
      checked: false,
    };

    setList((prev) => [...prev, newTodoItem]);
    setNewTodo("");
  };

  const handleNewTodoListChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(evt.target.value);
  };

  const handleCheckTodoList = (
    index: number,
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    setList((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            checked: evt.target.checked,
          };
        }

        return item;
      })
    );
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div>
          <form onSubmit={handleNewTodoList} className={styles.form}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              onChange={handleNewTodoListChange}
              value={newTodo}
              required
            />
            <button>
              Criar
              <PlusCircle size={20} />
            </button>
          </form>

          <div className={styles.content}>
            <header>
              <strong>
                Tarefas criadas <span>{list.length}</span>
              </strong>

              <strong>
                Concluídas <span>{list.filter(item => item.checked).length}</span>
              </strong>
            </header>

            <List
              items={list}
              onRemove={handleRemoveItem}
              onCheck={handleCheckTodoList}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
