import { IoBagOutline } from "react-icons/io5";
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center p-2 text-white transition-colors border rounded-md border-neutral-200 ">
   <IoBagOutline
        className={clsx('h-5 w-5 transition-all ease-in-out hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-8 w-8 rounded bg-black text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
