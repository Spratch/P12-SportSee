import { PerformanceType } from "../../../types/performance";

type Props = {
  performances: PerformanceType;
};

export default function Performances({ performances }: Props) {
  return (
    <article className="dashboard__chart dashboard__chart--perf">
      {performances.data.map((data) => (
        <div
          key={data.kind}
          className=""
        >
          {data.value}
        </div>
      ))}
    </article>
  );
}
