"use client";

import { usePathname } from "next/navigation";
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/Breadcrums";

export default function CustomBreadcrums() {
  const pathName = usePathname();
  const pathArray = pathName.split("/").map((item) => {
    if (item === "") return "home";
    return item;
  });
  return (
    <Breadcrumb className="text-sectionTitle">
      <BreadcrumbList className="md:px-[32px] py-[4px]">
        {pathArray.map((item, index) => (
          <React.Fragment key={item}>
            <BreadcrumbItem className="px-[8px] py-[4px]" key={item}>
              <BreadcrumbLink
                className="capitalize text-[13px] underline font-[400]"
                href={`/${item === "home" ? "" : item}`}
              >
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== pathArray.length - 1 && (
              <BreadcrumbSeparator className="w-[24px] h-[24px]" key={`${item}-separator`} />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}