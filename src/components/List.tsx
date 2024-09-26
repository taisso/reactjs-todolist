import { ChangeEvent } from "react";
import styles from "./List.module.css";
import { ListItem } from "./ListItem";

export interface ItemProps {
  title: string;
  checked: boolean;
}

interface ListProps {
  items: ItemProps[];

  onRemove: (index: number) => void;
  onCheck: (index: number, evt: ChangeEvent<HTMLInputElement>) => void;
}

export function List({ items, onRemove, onCheck }: Readonly<ListProps>) {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          initChecked={item.checked}
          index={index}
          onRemove={onRemove}
          onCheck={onCheck}
        />
      ))}
    </ul>
  );
}
