import Image from 'next/image'

export function LogoWhite() {
  return (
    <div className="relative size-full">
      <Image 
        src="/images/miauzly-logo-typo-white.png" 
        alt="Miauzly Logo" 
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
