import React from 'react'

export default function ContentTitle({children, size="2xl", count}: {children: React.ReactNode; size?: "lg" | "xl" | "2xl" | string; count?: number}) {
  return (
    <>
    {size === "2xl" && <h2 className="flex text-2xl md:text-3xl font-bold mb-5">
        {count ? <span className="me-2">{count}</span> : ""} {children}  
    </h2>}
    {size === "xl" && <h3 className="flex text-xl md:text-2xl font-bold mb-5">
        {count ? <span className="me-2">{count}.</span> : ""} {children}
    </h3>}
    {size === "lg" && <h4 className="flex text-lg md:text-xl font-bold mb-5">
        {count ? <span className="me-2">{count}.</span> : ""} {children}
    </h4>}
    </>
  );
}