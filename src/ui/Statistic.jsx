import { formatNumber } from "../utils/helpers";

function Statistic({ color, text, icon, data }) {
  return (
    <div
      className={`bg-${color}-200 flex items-center justify-between rounded-md p-2 md:p-3 `}
    >
      <div>
        <p
          className={`mb-1 text-sm
font-normal text-[#8a8e97] md:mb-2`}
        >
          {text}
        </p>
        <p className="text-lg font-semibold md:text-2xl">
          {formatNumber(data)}
        </p>
      </div>
      <span className={`text-${color}-500 text-2xl md:text-3xl `}>{icon}</span>
    </div>
  );
}

export default Statistic;
