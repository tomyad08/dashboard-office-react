import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function PriorityFunction({ input }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [input.done, input.pending, input.reject],
              borderColor: [
                "rgb(22, 163, 74)",
                "rgb(50, 69, 247)",
                "rgb(230, 34, 59)",
              ],
              backgroundColor: [
                "rgb(22, 163, 74)",
                "rgb(50, 69, 247)",
                "rgb(230, 34, 59)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [input]);

  return (
    <div className="flex justify-start">
      <div>
        <canvas ref={chartRef} className=" w-32"></canvas>
        <h1 className="my-5 text-center font-semibold text-xl">{input.name}</h1>
      </div>
    </div>
  );
}

export default PriorityFunction;
