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
  const maxAge = 70;
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
          <h3 className="text-[20px] text-gray-900">Your Life Status</h3>
          <dl className="mt-0.5 space-y-px text-[15px] text-gray-500">
            <div>
              <dd className="inline">based on average lifespan : 70</dd>
            </div>
          </dl>
        </div>
      </li>
      <div className="grid grid-cols-2 gap-4">
        <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
          <h2 className="mt-2 font-bold">Current age</h2>
          <div className="flow-root mt-3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">{age}</dl>
          </div>
        </a>
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
