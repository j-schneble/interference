// import clsx from 'clsx';
import Image from 'next/image'
import imageAsset from '../../public/images/inter.png'
export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <div >
    <Image
alt="ref"

// className={clsx('h-24 w-24 bg-transparent', props.className)}
src={imageAsset}
/>
    </div>
  );
}
