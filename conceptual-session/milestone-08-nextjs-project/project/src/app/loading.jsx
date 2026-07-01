import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 gap-2">
      <Spinner size="lg" />
      <span className="text-xs text-muted">Large</span>
    </div>
  );
};
export default loading;
