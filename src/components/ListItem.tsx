import { Trash } from "@phosphor-icons/react";
import styles from "./ListItem.module.css";
import { ChangeEvent } from "react";

export interface ListItemProps {
  title: string;
  initChecked: boolean;
  index: number;

  onCheck: (index: number, evt: ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
}

export function ListItem({
  title,
  index,
  initChecked = false,
  onRemove,
  onCheck
}: Readonly<ListItemProps>) {
  return (
    <li>
      <div className={styles.checkboxContent}>
        <div></div>
        <input
          type="checkbox"
          name="todo"
          id="todo"
          checked={initChecked}
          onChange={(evt) => onCheck(index, evt)}
        />
      </div>
      <p>{title}</p>
      <button onClick={() => onRemove(index)}>
        <Trash size={20} />
      </button>
    </li>
  );
}
