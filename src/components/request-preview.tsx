import { cn } from "@/lib/utils";

export default function RequestPreview({
  data = { nothingHere: true },
  title,
  className,
}: { data: unknown; title?: string; className?: string }) {
  return (
    <div className={cn("container whitespace-pre-wrap border border-red-400", className)}>
      {title && <h1 className="font-black text-2xl capitalize">{title}</h1>}
      <pre className="container whitespace-pre-wrap ">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
