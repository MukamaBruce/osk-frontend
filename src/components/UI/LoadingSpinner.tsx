interface LoadingSpinnerProps {
  fullPage?: boolean;
}

const LoadingSpinner = ({ fullPage = false }: LoadingSpinnerProps) => (
  <div
    className={
      fullPage
        ? "min-h-[60vh] flex items-center justify-center"
        : "flex items-center justify-center py-16"
    }
    role="status"
    aria-label="Loading"
  >
    <span
      className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-primary-colour animate-spin"
      aria-hidden="true"
    />
  </div>
);

export default LoadingSpinner;
