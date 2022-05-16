import ImgWelcome from '../../assets/img/icons/welcome.png';

export const NotesWelcom = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5 h-screen">

        <h3 className="uppercase text-my-color-two text-6xl font-extrabold">¡bienvenido!</h3>

        <div className="my-10">
            <img className='w-80' src={ ImgWelcome } alt="iamgen de bienvenida" />
        </div>

        <p className='text-my-color-two text-xl font-extrabold'>Crea tus notas importantes para siempre tenerlas en cuenta y que no se te olviden.</p>
        
    </section>
  )
}
