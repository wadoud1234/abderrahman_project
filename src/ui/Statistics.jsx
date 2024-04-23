import Statistic from "./Statistic";
function Statistics({ children }) {
  return (
    <section className="mb-8 grid grid-cols-1  gap-4  rounded-2xl bg-customGray p-5 md:grid-cols-4">
      {children}
    </section>
  );
}

export default Statistics;
