import CandidateCard from "../components/CandidateCard"
import Footer from "../components/Footer"
import Header from "../components/Header"
//import { Chart as ChartJS, registerables } from "chart.js"
import hero_image from "../assets/hero.png"
import candidate_1 from "../assets/candidate-1.png"
import candidate_2 from "../assets/candidate-2.png"
import { Link } from "react-router-dom"
// import { Bar } from "react-chartjs-2"

export default function LandingPage() {
  const dataCandidate = [
    {
      name: "Chandra panca wibawa",
      no: 1,
      img: candidate_1,
      visi: "Mewujudkan HiMa - TI sebagai wadah yang ASIK (Aktif, Solutif, Inspiratif, dan Kompeten) bagi seluruh Mahasiswa Program Studi Teknik Informatika STMIK Widya Cipta Dharma ",
      misi: [
        "Aktif berperan dalam lingkup IT terkhusus yang ada di Kampus STMIK WiCiDa",
        "Solutif dalam mewadahi  Mahasiswa Program Studi Teknik Informatika STMIK WiCiDa",
        "Menjadi wadah yang Inspiratif untuk seluruh Mahasiswa Program Studi Teknik Informatika",
        "Kompeten dalam Dunia IT di STMIK WiCiDa",
      ],
      numberPosition: "bottomRight", // topLeft, topRight, bottomLeft, bottomRight default position is bottomRight
    },
    {
      name: "Arief Budiman",
      no: 2,
      img: candidate_2,
      visi: "Membangun sebuah Himpunan Mahasiswa yang Aspiratif, inovatif, adaptif dan membentuk kader-kader yang berkompeten serta menjunjung tinggi rasa kekeluargaan sesama Mahasiswa Teknik Informatika STMIK Widya Cipta Dharma.",
      misi: [
        "Mempererat hubungan dan rasa kekeluargaan Himpunan  dengan seluruh Mahasiswa Program Studi Teknik Informatika",
        "Membentuk kader-kader yang aktif, kreatif, kritis, serta berakhlak mulia dan meningkatkan interaksi dan pengabdian pada masyarakat",
        "Mengoptimalkan minat bakat dan potensi mahasiswa Teknik Informatika melalui program kerja HiMa-TI",
        "Memperluas dan memperkuat kerja sama dengan pihak luar kampus STMIK WiCiDa dalam melaksanakan berbagai kegiatan",
      ],
      numberPosition: "topLeft", // topLeft, topRight, bottomLeft, bottomRight default position is bottomRight
    },
  ]

  return (
    <div className="LandingPage flex flex-col overflow-auto">
      <Header />
      <section className="Hero flex flex-col justify-center h-screen xl:h-full items-center aspect-video mb-4 relative">
        <div className="absolute h-full w-full bg-black opacity-50 text-white"></div>
        <div className="absolute h-full w-full flex flex-col justify-center gap-5 text-center items-center text-white font-semibold">
          <p className="text-2xl md:text-3xl lg:text-5xl animate__animated animate__backInDown">PEMILIHAN KETUA UMUM</p>
          <p className="text-sm p-1 bg-blue-400 text-white lg:text-3xl md:p-2 animate__animated animate__fadeIn">
            Himpunan Mahasiswa Teknik Informatika
          </p>
        </div>
        <img src={hero_image} className="xl:w-full w-full h-full object-cover xl:aspect-video" />
      </section>
      <section className="Candidate flex flex-col justify-center items-center w-full">
        {dataCandidate.map((data, index) => (
          <CandidateCard {...data} key={index} />
        ))}
      </section>
      {/* <section className="TotalCount flex flex-col justify-center items-center w-full mt-4 mb-4">
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
      </section> */}
      <section className="mb-10 px-5">
        <Link
          to="/login"
          className="w-full mx-auto max-w-2xl bg-blue-100 p-4 flex items-center justify-center gap-4 rounded-md hover:scale-105 duration-200"
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#1e40af"
                d="M494 21.621c-14.947 8.43-29.566 17.581-43.67 29.227l7.318 38.547C471.923 93.66 483.583 95.26 494 95.36v-73.74zm-98.982 24.512c-15.283-.085-32.48 2.596-53.832 6.834l-.22.043-.22.033c-14.77 2.177-40.794 12.065-66.465 38.867l44.27 11.766c.972-1.493 5.936-9.004 6.88-10.555 5.124 3.123 10.248 6.244 15.372 9.365-12.475 20.475-26.742 35.556-43.934 54.522-2.123 4.718.977 8.199 4.36 10.14 5.22 2.931 14.1 3.09 16.437 2.102 23.932-15.768 40.819-35.928 55.963-56.271l5.469.964c11.501 2.031 26.47 1.058 38.707-2.853 11.098-3.548 19.272-9.357 22.662-15.688L432.54 53.65c-12.044-5.214-24.039-7.442-37.523-7.517zM227.932 98.717l-29.436 115.986 9.643.297H311.27l.9-.209 6.804-27.092c-8.86 1.9-18.296-.217-26.557-4.855-5.188-2.913-10.024-7.24-12.621-13.434-7.797-19.938 15.857-37.297 28.724-52.75l-80.59-17.943zM69.562 201l-23 46h418.875l-23-46H334.195l-3.517 14H352v18H160v-18h19.852l3.552-14H69.563zM41 265v222h430V265H41zm14 14h402v194H55V279zm18 18v118.238l34.502-74.994 73.36 31.762 66.652-45.84 37.513 57.273 50.11-4.595 31.3-39.332L439 394.627V297H73zm169.543 54.43l-90.63 62.33 27.01 41.24h95.606l19.666-24.71-51.652-78.86zm-126.045 12.326L74.521 455h82.885l-30.193-46.098 36.144-24.857-46.859-20.29zm253.065.732L297.533 455h140.54l.927-1.166v-36.602l-69.438-52.744zm-49.944 33.854l-23.426 2.148 9.805 14.969 13.621-17.117z"
              ></path>
            </g>
          </svg>
          <p className="font-semibold text-blue-800">Voting Di Sini</p>
        </Link>
      </section>
      <Footer />
    </div>
  )
}
