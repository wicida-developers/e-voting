import logo from "../assets/hima-ti.png"

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-6">
      <img src={logo} alt="hima-ti logo" className="w-28 animate-pulse" />
      <h1 className="font-bold text-lg md:text-2xl text-center">
        Himpunan Mahasiswa <br /> Teknik Informatika
      </h1>
    </div>
  )
}
