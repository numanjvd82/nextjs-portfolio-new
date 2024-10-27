export default function Projects() {
  const data = {
    caption: `I'm writing my story so that others might see fragments of themselves."`,
  };
  return (
    <div
      id="projects"
      className="min-h-screen px-6 py-20 text-white mix-blend-difference"
    >
      <div className="flex justify-center">
        <div className="">
          <p className="font-serif text-sm tracking-wider">{data.caption}</p>
        </div>
      </div>
    </div>
  );
}
