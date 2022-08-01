import React from "react";

const Product = ({ data, className }) => {
    return (
        <div className="relative bg-gray-100 rounded-lg
      border-2 border-gray-100
      shadow
      p-4
      flex flex-col
      justify-between
      items-center
      cursor-pointer
      hover:border-2 hover:border-red-300
      text-[#696969]
      h-full">
            <div className="box-border mb-4 min-h-[15rem] max-h-[18rem] overflow-hidden rounded-lg">
                <img className="w-full h-auto object-cover" src={data.imageurl} alt={data.imageurl} />
            </div>
        </div>
    )
}

export default Product;