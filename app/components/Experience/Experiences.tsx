import { experiences } from "@/app/data";
import { DotIcon } from "lucide-react";
import Badge from "../ui/Badge";
import { Detail } from "./Detail";

export const Experiences = () => {
  return (
    <>
      {experiences.map(
        ({ companyName, details, duration, id, roles, tags }, i) => (
          <div
            key={id}
            className={`border-b-[1px] border-secondary ${
              details ? "p-4 sm:p-6 md:p-8" : "p-4 sm:p-6 md:p-8"
            }`}
          >
            <div className="flex flex-col gap-4 items-center justify-center lg:flex-row lg:justify-between text-white mix-blend-difference">
              <div className="flex-grow text-center lg:text-left">
                <h2 className="tracking-widest text-lg sm:text-xl md:text-2xl break-words font-sans">
                  {companyName}
                </h2>
                <div className="flex justify-center lg:justify-start items-center mt-2">
                  <DotIcon size={30} />
                  <p className="tracking-widest break-words text-sm sm:text-base font-serif">
                    {duration}
                  </p>
                </div>
              </div>
              <div className="text-center lg:text-left lg:basis-1/4 xl:basis-1/5">
                <p className="tracking-widest break-words text-sm sm:text-base font-sans">
                  {roles.join(", ")}
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 lg:basis-1/4 xl:basis-1/5">
                {tags.map((tech, i) => (
                  <Badge key={i} title={tech} />
                ))}
              </div>
            </div>

            <Detail key={i} details={details} />
          </div>
        )
      )}
    </>
  );
};
