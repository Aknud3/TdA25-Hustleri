/* eslint-disable react/prop-types */

function InfoBox(props) {

    const { bgColor, color, icon, text } = props

  return (
    <>
      <div className={`flex justify-center items-center shadow-lg ${bgColor} flex-col py-12 rounded-2xl w-fit px-16 min-h-[360px]`}>
        <img className='h-[6rem]' src={icon} alt="" />
        <p className={`w-[18rem] ${color} text-3xl text-center font-dosis font-semibold mt-6`}>
          {text}
        </p>
      </div>
    </>
  );
}

export default InfoBox;
