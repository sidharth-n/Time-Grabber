import React from "react";
import SecondsLeft from "./components/SecondsLeft.tsx";

interface Review {
  value: string;
}

const ResultPage: React.FC<{ age: number }> = ({ age }) => {
  return (
    <div className="content-area flex flex-col justify-center items-stretch gap-4 p-4 pb-6">
      <li className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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

      <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <h2 className="mt-2 font-bold">Current age</h2>
        <div className="flow-root mt-3">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">{age}</dl>
        </div>
      </a>
      <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <h2 className="mt-2 font-bold">Seconds left</h2>
        <div className="flow-root mt-3">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <SecondsLeft currentAge={age} maxAge={70} />
          </dl>
        </div>
      </a>
    </div>
  );
};

export default ResultPage;
