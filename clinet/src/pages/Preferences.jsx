import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@mantine/core";

function Preferences() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Technology",
    "Sports",
    "Health",
    "Entertainment",
    "Business",
    "Politics",
  ];
  console.log(selectedCategories);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center gap-7 items-center">
      <div>
        <h1 className="text-blue-600 font-semibold text-2xl">
          Select Interests
        </h1>
      </div>
      <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleCategory(category)}
            className={`shadow-md flex justify-center items-center gap-2 rounded-xl text-center px-5 py-2 cursor-pointer ${
              selectedCategories.includes(category) ? "bg-blue-500" : "bg-white"
            }`}
          >
            {selectedCategories.includes(category) && <CircleCheckBig />}
            {category}
          </motion.div>
        ))}
      </div>
      <Button>Seve Preferences</Button>
    </div>
  );
}

export default Preferences;
