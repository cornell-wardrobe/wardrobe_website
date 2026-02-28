function People({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 w-80%">
      {items.map((person) => (
        <div key={person.netID} className="relative group w-3/4 h- rounded-lg overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover rounded-lg shadow-lg "
          />
          <div className="max-w-[100%] max-h-[100%] absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-center p-4">
            <div className="max-w-[95%]"> {/* <-- constrain width */}
              <p className="text-white font-bold text-[clamp(0.7rem,1.5vw,1.2rem)]">{person.name}</p>
              <p className="text-white text-[clamp(0.6rem,1.1vw,2rem)] mb-4">{person.position}</p>
              <p className="text-white text-[clamp(0.5rem,0.9vw,1rem)] mb-2">{person.blurb}</p>
              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline text-[clamp(0.6rem,1vw,0.9rem)]"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default People;