import PlayButton from './PlayButton'
import playBoard from '../assets/playBoard.svg'

function GreyBox() {
  return (
    <>
        <div className='flex justify-between bg-backGrey items-center my-12 px-[8rem] py-[5rem] rounded-3xl shadow-lg'>
            <div className='w-[100%]'>
                <h3 className='text-5xl w-[24rem] font-dosis font-extrabold leading-[4rem]'>Think Different, Play Smart.</h3>
                <PlayButton
                    width='w-[11rem]'
                    marginTop='mt-[2rem]'
                    py='py-[.8rem]'
                />
            </div>
            <img src={playBoard} className='h-[20rem]' alt="" />
        </div>
    </>
  )
}

export default GreyBox