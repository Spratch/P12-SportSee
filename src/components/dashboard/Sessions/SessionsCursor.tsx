type Point = {
  x: number;
};

type Props = {
  points?: Point[];
};

export default function SessionsCursor(props: Props) {
  const { points } = props;
  if (!points) return null;
  const { x } = points[0];
  return (
    <rect
      x={x}
      y={0}
      width={800}
      height={500}
      fill="black"
      opacity={0.1}
    ></rect>
  );
}
