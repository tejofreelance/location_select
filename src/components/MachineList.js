import React from "react";
import MachineCard from "./MachineCard";

export default function MachineList({ filteredCategories, filteredSearch }) {
  return (
    <>
      {filteredCategories.map((item) => (
        <ul>
          {/* Filter and map through the second level of API */}
          <div className="row">
            {item.product_details.filter(filteredSearch).map((subItem) => (
              <MachineCard
                image={subItem.image}
                title={subItem.model}
                weight={subItem.operating_weight}
                power={subItem.power}
              />
            ))}
          </div>
        </ul>
      ))}
    </>
  );
}
