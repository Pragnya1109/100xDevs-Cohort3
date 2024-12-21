export const Card = ({ data }) => {
    const { img, imgAlt, title, price, description, rating, image } = data;
  
    return (
      <div className="p-5 rounded-md bg-slate-200 shadow-lg max-w-xs text-center">
        <div>
          <img
            className="w-full h-40 mb-2 rounded-md object-cover"
            src={img}
            alt={imgAlt}
          />
        </div>
  
        <div className="mb-2">
          <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
          <p className="text-gray-600 text-base font-medium italic">{price}</p>
        </div>
  
        <p
          className="text-sm text-gray-700 mb-4 cursor-pointer"
          onClick={(e) => e.target.classList.toggle("line-clamp-none")}
        >
          {description}
        </p>
  
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-800 font-medium">{rating}</span>
          </div>
          <button className="bg-customMauve text-white px-4 py-2 rounded-md border border-customMauve hover:bg-white hover:text-customMauve transition">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  