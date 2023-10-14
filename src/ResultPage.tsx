import React from "react";

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
          <h3 className="text-[20px] text-gray-900">Apple Airpods Pro</h3>
          <dl className="mt-0.5 space-y-px text-[15px] text-gray-500">
            <div>
              <dd className="inline">Third Generation</dd>
            </div>
          </dl>
        </div>
      </li>

      <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-thumbs-up"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
        <h2 className="mt-2 font-bold">Pros</h2>
        <div className="flow-root mt-3">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">{age}</dl>
        </div>
      </a>
    </div>
  );
};

export default ResultPage;
