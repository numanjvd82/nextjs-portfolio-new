import { experiences } from "@/app/data";
import { DotIcon } from "lucide-react";
import Badge from "../ui/Badge";
import { Detail } from "./Detail";

export const Experiences = () => {
  return (
    <div className="space-y-0">
      {experiences.map(
        ({ companyName, details, duration, id, roles, tags }, i) => (
          <div
            key={id}
            className="border-b-[1px] border-secondary p-4 sm:p-6 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start text-white mix-blend-difference">
              {/* Company Name and Duration */}
              <div className="lg:col-span-4 text-center lg:text-left">
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

              {/* Roles */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <p className="tracking-widest break-words text-sm sm:text-base font-sans">
                  {roles.join(", ")}
                </p>
              </div>

              {/* Tags */}
              <div className="lg:col-span-4 flex items-center justify-center lg:justify-start flex-wrap gap-2">
                {tags.map((tech, i) => (
                  <Badge key={i} title={tech} />
                ))}
              </div>
            </div>

            <Detail key={i} details={details} />
          </div>
        )
      )}
    </div>
  );
};
