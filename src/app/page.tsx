"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';

function MyApp() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? <SplashScreen finishLoading={finishLoading} /> : (
        <main className="flex min-h-screen flex-col items-center justify-center p-20 overflow-hidden">
            <Image
            src="/header.png"
            alt="Header"
            className="pb-8 snap-proximity snap-x snap-center"
            width={1100}
            height={1100}
            ></Image>

            <div className ="flex grid grid-cols-3 grid-rows-2 snap-proximity snap-x">
              <div>
            <Image
            src="/1.png"
            alt="Picture"
            className="py-4 hover:rotate-45 snap-center"
            width={500}
            height={500}
            ></Image>
            <p className ="text-normal font-normal text-center text-black"> “Track suits and red wine, Movies for two”</p>
            </div>

            <div>
            <Image
            src="/2.png"
            alt="Picture"
            className="py-4 hover:rotate-[-45deg] snap-center"
            width={500}
            height={500}
            ></Image>
            <p className ="text-normal font-normal text-center text-black"> “We'll take off our phones, And we'll turn off our shoes”</p>
            </div>

            <div>
            <Image
            src="/3.png"
            alt="Picture"
            className="py-4 hover:rotate-45 snap-center"
            width={500}
            height={500}
            ></Image>
             <p className ="text-normal font-normal text-center text-black"> “We'll play Nintendo, Though I always lose”</p>
            </div>

            <div>
            <Image
            src="/4.png"
            alt="Picture"
            className="py-4 hover:rotate-[-45deg] snap-center"
            width={500}
            height={500}
            ></Image>
            <p className ="text-normal font-normal text-center text-black"> “'Cause you'll watch the TV, While I'm watching you”</p>
            </div>

            <div>
            <Image
            src="/5.png"
            alt="Picture"
            className="py-4 hover:rotate-45 snap-center"
            width={500}
            height={500}
            ></Image>
            <p className ="text-normal font-normal text-center text-black"> “There's not many people I'd honestly say”</p>
            </div>

            <div>
            <Image
            src="/6.png"
            alt="Picture"
            className="py-4 hover:rotate-[-45deg] snap-center"
            width={500}
            height={500}
            ></Image>
            <p className ="text-normal font-normal text-center text-black"> “I don't mind losing to, But there's nothing like doing nothing with you”</p>
            </div>

            </div>

          <Image
            src="/footer.png"
            alt="Congrats"
            className="pt-8 snap-proximity snap-x"
            width={1100}
            height={1100}
            ></Image>
        </main>
      )}
    </div>
  );
}

export default MyApp;