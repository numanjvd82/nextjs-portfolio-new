import { experiences } from "@/app/data";
import { DotIcon } from "lucide-react";
import Badge from "../ui/Badge";
import { Detail } from "./Detail";

export const Experiences = () => {
  return (
    <>
      {experiences.map(
        ({ companyName, details, duration, id, roles, tags }, i) => (
          <div key={id} className="border-b-[1px] border-secondary p-4 ">
            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between ">
              <div>
                <h2 className="tracking-widest text-lg break-words  font-sans">
                  {companyName}
                </h2>
                <div className="flex justify-center sm:justify-start items-center mt-2">
                  <DotIcon size={30} />
                  <p className="tracking-widest break-words text-sm  font-serif">
                    {duration}
                  </p>
                </div>
              </div>
              <p className="tracking-widest break-words text-sm font-sans sm:basis-48">
                {roles.join(", ")}
              </p>
              <div className="flex items-center flex-wrap gap-2">
                {tags.map((tech, i) => (
                  <Badge className="bg-secondary" key={i} title={tech} />
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
