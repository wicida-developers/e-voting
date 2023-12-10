import HimaTi from "../assets/hima-ti.png"

export default function LoginPage() {
  return (
    <div className="LoginPage h-screen flex flex-col pl-6 pr-6">
      <div className="LoginPage__header flex flex-row items-center justify-center">
        <img src={HimaTi} alt="HimaTi" className="w-16 h-16 mt-4 mb-4" />
      </div>
      <div className="LoginPage__body flex flex-col items-center justify-center self-center mt-10 bg-loginBg w-full p-4 rounded-lg max-w-2xl">
        <div className="LoginPage__body__form flex flex-col items-center justify-center w-full">
          <div className="LoginPage__body__form__title flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-white">Login</h1>
          </div>
          <div className="LoginPage__body__form__input flex flex-col items-center justify-center w-full">
            <form className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="text-white mb-1 font-bold">NIM</label>
                <input
                  type="text"
                  placeholder="Masukkan NIM Anda"
                  className="w-64 h-12 p-4 mb-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col items-start justify-center mb-4">
                <label className="text-white mb-1 font-bold">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan Password Anda"
                  className="w-64 h-12 p-4 mb-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-64 h-12 mb-4 rounded-lg bg-white text-loginBg focus:outline-none hover:bg-blue-600 font-bold"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
