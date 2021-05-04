import { useState } from "react";
import ResponsiveModal from "react-responsive-modal";
import Button from "./Button";
import DeleteIcon from "./DeleteIcon";
import "react-responsive-modal/styles.css";
import styles from "../../styles/NominationsButton.module.css";
const modalStyles = {
  modal: {
    backgroundColor: "var(--blue)",
    boxShadow: "none",
    display: "flex",
    overflow: "none",
    width: "100%",
    padding: "0",
    margin: "0",
    height: "100%",
    minWidth: "100%",
    justifyContent: "center",
    color: "#fff",
  },
  overlay: {
    padding: 0,
  },
  closeIcon: {
    fill: "#fff",
  },
};

const NominationsButton = (props) => {
  const { className, nominationsCtx } = props;
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onClick = (nomination) => {
    nominationsCtx.dispatch({ type: "DELETE_NOMINATION", payload: nomination });
  };

  return (
    <div className={className}>
      <button className={styles.button} onClick={onOpenModal}>
        {nominationsCtx.nominations.length} Nominations
      </button>
      <ResponsiveModal
        styles={modalStyles}
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className={styles.container}>
          <h2 className={styles.heading}>Nominations</h2>
          <ul className={styles.nominationList}>
            {nominationsCtx.nominations.length ? (
              nominationsCtx.nominations.map((nomination) => (
                <li className={styles.listElement} key={nomination.key}>
                  {nomination.Title} ({nomination.Year})
                  <Button
                    className={styles.innerButton}
                    htmlType="button"
                    onClick={() => onClick(nomination)}
                    icon={DeleteIcon()}
                  />
                </li>
              ))
            ) : (
              <li>No nominations</li>
            )}
          </ul>
        </div>
      </ResponsiveModal>
    </div>
  );
};
export default NominationsButton;
