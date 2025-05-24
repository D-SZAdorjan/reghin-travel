import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SideBar() {
  return (
    <section className="rounded-xl border-2 border-solid border-primary-light px-9 py-7">
      <div className="my-8">
        <h4 className="mb-5 font-medium text-lg">Recent Posts</h4>
        <div className="flex flex-col gap-y-4">
          <Link href="" className="flex items-center">
            <div className="w-16 h-16 overflow-hidden rounded-lg">
              <Image
                src="/images/placeholder.png"
                className="w-full h-full object-cover"
                width={64}
                height={64}
                alt="Image"
              ></Image>
            </div>
            <div className="ms-5">
              <h5 className="font-medium text-base">
                10 of the Best Solo Travel Destinations for Women
              </h5>
              <div className="text-sm mt-2">April 06 2023</div>
            </div>
          </Link>

          <Link href="" className="flex items-center">
            <div className="w-16 h-16 overflow-hidden rounded-lg">
              <Image
                src="/images/placeholder.png"
                className="w-full h-full object-cover"
                width={64}
                height={64}
                alt="Image"
              ></Image>
            </div>
            <div className="ms-5">
              <h5 className="font-medium text-base">
                10 of the Best Solo Travel Destinations for Women
              </h5>
              <div className="text-sm mt-2">April 06 2023</div>
            </div>
          </Link>

          <Link href="" className="flex items-center">
            <div className="w-16 h-16 overflow-hidden rounded-lg">
              <Image
                src="/images/placeholder.png"
                className="w-full h-full object-cover"
                width={64}
                height={64}
                alt="Image"
              ></Image>
            </div>
            <div className="ms-5">
              <h5 className="font-medium text-base">
                10 of the Best Solo Travel Destinations for Women
              </h5>
              <div className="text-sm mt-2">April 06 2023</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
