export default function Skeleton({ className }: { className: string }) {
  return <article className={className + " loading"}></article>;
}
