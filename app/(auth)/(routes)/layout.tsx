import { Logo } from "@/components/Logo";

export default function  LayoutAuth({ children } : {children:React.ReactNode}) {
  return (
    <div className='flex flex-col justify-center h-full items-center'> 
        <Logo />
        <h1 className='text-3xl my-2'>Ondiss</h1>
        <p className='text-2xl my-2'>Bienvenidos al Dashboard </p>

        {children}
    </div>
   
  )
}
