import PropTypes from "prop-types"

export default function CandidateCard({ name, no, visi, misi }) {
  return (
    <div
      className={`candidate__card flex px-6 flex-col md:gap-5 md:px-8 xl:px-10  justify-center items-center xl:items-start xl:my-20 w-full h-1/2 mb-4 ${
        no % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="candidate__card__image flex flex-col justify-center items-center w-full relative mb-2">
        <img src="https://placehold.co/600x400" className="rounded-lg border-2 border-loginBg xl:w-full object-cover" />
        <p className="text-loginBg font-bold text-2xl absolute bottom-0 right-0 bg-[#fcfdff] px-5 py-2 rounded-full rounded-br-none border-t-2 border-l-2 border-loginBg">
          {no}
        </p>
      </div>
      <div className="md:w-5/6 lg:w-full">
        <div className="candidate__card__name flex flex-col justify-center items-center w-full mb-2">
          <p className="text-gray-800 font-bold text-3xl self-start xl:text-5xl">{name}</p>
        </div>
        <div className="candidate__card__visi flex flex-col justify-center items-center w-full mb-2">
          <p className="font-bold text-xl text-gray-800 self-start mb-2">Visi</p>
          <p className="text-lg self-start text-justify text-gray-800">{visi}</p>
        </div>
        <div className="candidate__card__misi flex flex-col justify-center items-center w-full mb-2">
          <p className=" font-bold text-xl self-start mb-2 text-gray-800">Misi</p>
          <ul className="text-lg self-start list-disc pl-5 text-gray-800">
            {misi.map((misi, index) => (
              <li className="mb-2" key={index}>
                {misi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

CandidateCard.propTypes = {
  name: PropTypes.string,
  no: PropTypes.number,
  visi: PropTypes.string,
  misi: PropTypes.array,
  reverse: PropTypes.bool,
}
