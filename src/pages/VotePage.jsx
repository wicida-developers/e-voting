import { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export default function VotePage() {
  const [voteStatus, setVoteStatus] = useState(localStorage.getItem("voteStatus") || false)

  const handleVote = async (e) => {
    const { value } = e.target

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

        console.log(value)
        if (secondConfirmation.isConfirmed) {
          localStorage.setItem("voteStatus", true)
          setVoteStatus(true)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="min-h-screen bg-blue-400 grid place-items-center px-8 py-4 md:px-0 md:py-0">
      <section className="max-w-2xl w-full text-center bg-gray-50 py-12 px-9 rounded-lg mx-8 md:shadow-md md:border md:border-gray-200">
        <h1 className="text-xl font-bold mb-10 md:text-2xl lg:text-3xl">
          PEMILIHAN CALON KETUA UMUM
          <br />
          HIMA-TI STMIK WIDYA CIPTA DHARMA <br /> PERIODE 2023/2024
        </h1>
        <div>
          <div className="flex gap-5 w-full rounded flex-col items-center md:flex-row">
            {voteStatus ? (
              <h1 className="m-auto font-medium">Terima kasih telah berpartisipasi</h1>
            ) : (
              <>
                <button
                  className="relative bg-red-300 h-[330px] w-full hover:scale-105 md:w-1/2 transition-transform"
                  value={"poll-1"}
                  onClick={handleVote}
                >
                  <img src="" alt="" />
                </button>
                <button
                  className="relative bg-red-300 h-[330px] w-full hover:scale-105 md:w-1/2 transition-transform"
                  value={"poll-2"}
                  onClick={handleVote}
                >
                  <img src="" alt="" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
