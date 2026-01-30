import ConfirmDialog from "./ConfirmDialog";
import { useUnsavedChanges } from "./useUnsavedChanges";
import { useNavigate } from "react-router-dom";

interface Props {
  when: boolean;
}

const UnsavedChangesGuard: React.FC<Props> = ({ when }) => {
  const navigate = useNavigate();

  const {
    showDialog,
    requestNavigation,
    confirmLeave,
    cancelLeave,
  } = useUnsavedChanges(when);

  const handleConfirm = () => {
    const path = confirmLeave();
    if (path) navigate(path);
  };

  return (
    <>
      <ConfirmDialog
        open={showDialog}
        onConfirm={handleConfirm}
        onCancel={cancelLeave}
      />
    </>
  );
};

export default UnsavedChangesGuard;
