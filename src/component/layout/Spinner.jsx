import spinner from "./assets/spinner.gif"

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinner}
        width={180}
        className='text-center mx-auto'
        alt='Loding...'
      />
    </div>
  )
}

export default Spinner
