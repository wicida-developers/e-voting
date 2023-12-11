import CandidateCard from "../components/CandidateCard"
import Header from "../components/Header"
import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"

export default function LandingPage() {
  ChartJS.register(...registerables)

  return (
    <div className="LandingPage flex flex-col overflow-auto px-8 xl:px-96">
      <Header />
      <section className="Hero flex flex-col justify-center items-center w-full mb-4">
        <img src="https://placehold.co/600x400" className="rounded-lg xl:w-full object-cover" />
      </section>
      <section className="Candidate flex flex-col justify-center items-center w-full">
        <CandidateCard />
        <CandidateCard />
      </section>
      <section className="TotalCount flex flex-col justify-center items-center w-full mt-4 mb-4">
        <h1 className="text-2xl font-bold ">Hasil Perhitungan</h1>
        <p className="text-xs text-center mb-2">
          Hasil Perhitungan berasal dari data yang terlah dimasuk oleh mahasiswa Program Studi teknik Informatika STMIK
          Widya Cipta Dharma
        </p>
        <div className="TotalCountChart flex flex-row justify-center items-center w-full">
          <Bar
            datasetIdKey="Total Suara"
            data={{
              labels: ["Candidate 1", "Candidate 2"],
              datasets: [
                {
                  label: "Total Suara",
                  data: [12, 15],
                  backgroundColor: ["red", "blue"],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </section>
    </div>
  )
}
