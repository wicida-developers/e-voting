import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useDispatch, useSelector } from "react-redux"
import { asyncChoose } from "../states/choose/action"

export default function VotePage() {
  const authUser = useSelector((state) => state.authUser)

  const dispatch = useDispatch()

  const dataCandidate = [
    {
      id: "poll-1",
      image: "https://placehold.co/600x400",
    },
    {
      id: "poll-2",
      image: "https://placehold.co/600x400",
    },
  ]

  const handleVote = async (id) => {
    try {
      const firstConfirmation = await withReactContent(Swal).fire({
        title: "Yakin?",
        text: "Kamu tidak dapat mengubah pilihan setelah memilih",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      })

      if (firstConfirmation.isConfirmed) {
        const secondConfirmation = await withReactContent(Swal).fire({
          title: "Berhasil",
          text: "Kamu telah memilih, Terima kasih telah berpartisipasi",
          icon: "success",
          confirmButtonText: "Ok",
        })

        if (secondConfirmation.isConfirmed) {
          dispatch(asyncChoose(id))
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="min-h-screen bg-blue-400 grid place-items-center px-2 py-4 md:px-0 md:py-0">
      <section className="max-w-2xl w-full text-center bg-gray-50 py-12 px-6 rounded-lg mx-8 md:shadow-md md:border md:border-gray-200">
        <h1 className="text-xl font-bold mb-10 md:text-2xl lg:text-3xl">
          PEMILIHAN CALON KETUA UMUM
          <br />
          HIMA-TI STMIK WIDYA CIPTA DHARMA <br /> PERIODE 2023/2024
        </h1>
        <div>
          <div className="flex gap-5 w-full rounded flex-col items-center sm:flex-row">
            {authUser?.chosen ? (
              <>
                <div className="m-auto space-y-2">
                  <span className="text-4xl">👍</span>
                  <h1 className="">Terima kasih telah berpartisipasi</h1>
                </div>
              </>
            ) : (
              <>
                {dataCandidate.map((data, index) => (
                  <button
                    key={index}
                    className="relative bg-red-300 h-[330px] w-full hover:scale-105 md:w-1/2 transition-transform"
                    value={data.id}
                    onClick={() => handleVote(data.id)}
                  >
                    <img src={data.image} className="w-full h-full object-cover" />
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
