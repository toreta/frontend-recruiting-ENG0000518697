import styles from "./style.module.css";

type Props = React.ComponentProps<"button">;

export const ActionButton: React.FC<Props> = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};
