import React from "react";
import SecondsLeft from "./components/SecondsLeft.tsx";
import BeatsLeft from "./components/BeatsLeft";
import DaysLeft from "./components/DaysLeft";
import MinutesLeft from "./components/MinutesLeft";
import BreathsLeft from "./components/BreathsLeft";
import WeeksLeft from "./components/WeeksLeft";

interface Review {
  value: string;
}

const ResultPage: React.FC<{ age: number }> = ({ age }) => {
  const maxAge = 73.16;
  const progress = parseFloat(((age / maxAge) * 100).toFixed(1));

  console.log(age, maxAge, progress);
  const ageLeft = maxAge - age;
  return (
    <div className="content-area flex flex-col justify-center items-stretch gap-4 p-4 pb-6">
      <li className="flex items-center gap-4">
        <img
          src="https://openclipart.org/image/800px/248459"
          alt=""
          className="h-16 w-16 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-[15px] text-gray-900 ">Your Life Status</h3>
          <dl className="mt-0.5 space-y-px text-[12px] text-gray-500">
            <div className="flex flex-col">
              <dd className="inline">{`your age : ${age}`}</dd>
              <dd className="inline">current life expectancy : 73.16</dd>
              <div>
                <span id="ProgressLabel" className="sr-only">
                  Loading
                </span>

                <div
                  role="progressbar"
                  aria-labelledby="ProgressLabel"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  className="block rounded-full bg-gray-200"
                >
                  <span
                    className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="font-bold text-white">
                      {" "}
                      {`${progress}%`}{" "}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </li>
      <h2 class="text-3xl font-bold sm:text-4xl self-center">
        Remaining assets
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Years left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              {ageLeft}
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Weeks left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <WeeksLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Days left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <DaysLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Minutes left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <MinutesLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Seconds left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <SecondsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Heartbeats left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <BeatsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Sunrises left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <DaysLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Breaths left</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <BreathsLeft timeLeft={ageLeft} />
            </dl>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResultPage;
