export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-blue to-mint" />
        <div className="h-2 w-24 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
