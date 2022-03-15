import { ThumbDownIcon, ThumbUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Clue({ value }: any) {
  const [status, setStatus] = useState<boolean | null>(null);

  return (
    <div className="px-4 pb-4 flex justify-between items-center">
      <div
        className={`transition-all ${status && 'font-bold'} ${
          status === false && 'opacity-25'
        }`}
      >
        {value}
      </div>
      <div className="flex">
        <button
          onClick={() => (status !== true ? setStatus(true) : setStatus(null))}
        >
          <ThumbUpIcon
            className={`h-5 w-5 text-stone-500 mx-2 rounded-full outline-none transition-all ${
              status && 'text-green-600'
            }`}
          ></ThumbUpIcon>
        </button>
        <button
          onClick={() =>
            status !== false ? setStatus(false) : setStatus(null)
          }
        >
          <ThumbDownIcon
            className={`h-5 w-5 text-stone-500 mx-2 rounded-full outline-none transition-all ${
              status === false && 'text-red-600'
            }`}
          ></ThumbDownIcon>
        </button>
      </div>
    </div>
  );
}
