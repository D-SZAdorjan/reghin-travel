// import { randomInt } from "crypto";

export default function ContentList({contentArray}:{contentArray: string[]}) {
    return (
      <ul className="my-5 ps-2">
        {contentArray.map((item, index) => (
          <li key={`list-item-${index}`} className="text-sm leading-7 m-0 before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:me-2.5 before:mb-1 before:align-middle">
            {item}
          </li>
        ))}
      </ul>
    );
}