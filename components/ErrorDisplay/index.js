export default function ErrorDisplay({ message }) {
  return (
    <div className="flex w-full min-h-[600px] justify-center items-center">
      <p style={{ whiteSpace: "pre-line" }}>{message}</p>
    </div>
  );
}
