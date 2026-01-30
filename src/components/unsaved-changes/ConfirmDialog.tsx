import React from "react";

interface Props {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<Props> = ({
  open,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-2xl p-6 shadow-2xl">
        <h2 className="text-lg font-semibold mb-2">
          You have unsaved changes
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to leave this page?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg"
          >
            Stay
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Leave Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
