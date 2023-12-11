export default function CandidateCard() {
  return (
    <div className="candidate__card flex flex-col justify-center items-center w-full h-1/2 mb-4">
      <div className="candidate__card__image flex flex-col justify-center items-center w-full relative mb-2">
        <img src="https://placehold.co/600x400" className="rounded-lg border-2 border-loginBg xl:w-full object-cover" />
        <p className="text-loginBg font-bold text-2xl absolute bottom-0 right-0 bg-white px-5 py-2 rounded-full rounded-br-none border-t-2 border-l-2 border-loginBg">
          1
        </p>
      </div>
      <div className="candidate__card__name flex flex-col justify-center items-center w-full mb-2">
        <p className="text-loginBg font-bold text-2xl self-start">Sigit Syamsu alam & Chatrina Vinsentia Silaban</p>
      </div>
      <div className="candidate__card__visi flex flex-col justify-center items-center w-full mb-2">
        <p className=" font-bold text-base self-start mb-2">Visi</p>
        <p className="text-xs self-start text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="candidate__card__misi flex flex-col justify-center items-center w-full mb-2">
        <p className=" font-bold text-base self-start mb-2">Misi</p>
        <ul className="text-xs self-start list-disc list-inside">
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        </ul>
      </div>
    </div>
  )
}
