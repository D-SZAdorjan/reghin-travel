"use client";
import { faFlag, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

const CheckpointComponent = ({ items = [], componentId = "checkpoint" }: {items?: AccordionItem[], componentId?: string}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(`0-${componentId}`);

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };
  return (
    <section className="relative mb-5 before:absolute before:top-[10px] before:bottom-[10px] before:left-[15px] before:border-2 before:border-dashed before:border-accent before:-z-1">
        {
            items.map((item, index) => (
                <div key={`${index}-${componentId}`} className="flex mt-8">
                    <div className={`flex items-center justify-center shrink-0 rounded-full ${ (index === 0 || index === items.length - 1) ? "w-8 h-8 bg-accent text-background text-base" : "w-6 h-6 border-4 border-accent border-solid bg-background mt-1.5 ms-[5px]"}`}>
                    {index === 0 && <FontAwesomeIcon icon={faLocationPin} size="sm" />}
                    {index === items.length - 1 && <FontAwesomeIcon icon={faFlag} size="sm" />}
                    </div>
                    <div className="ms-6 w-[90%]">
                    <div className="cursor-pointer text-text-primary text-base font-semibold mt-1.5" onClick={() => toggleItem(`${index}-${componentId}`)}>
                        {item.title}
                    </div>
                    <div className={`transition-all duration-400 ease-in-out overflow-hidden mt-4 ${openItemId === `${index}-${componentId}` ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                        {item.content}
                    </div>
                    </div>
                </div>
            ))
        }
    </section>
  );
};

export default CheckpointComponent;
