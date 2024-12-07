/* eslint-disable react/prop-types */
import duckRed from '../assets/duckRed.svg'

function PlayButton(props) {

    const {width, marginTop, py} = props

  return (
    <>
        <div className={`flex items-center justify-center bg-headBtnBlue text-white border-[4px] border-white border-solid rounded-xl px-6 py-[.5rem] gap-3 cursor-pointer select-none ${width} ${py} ${marginTop}`}>
            <p className='font-dosis text-3xl font-bold'>PLAY</p>
            <img className='h-[1.9rem]' src={duckRed} alt="" />
        </div>
    </>
  )
}

export default PlayButton