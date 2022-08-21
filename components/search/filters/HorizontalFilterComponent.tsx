import React from "react";
import { ListGroup } from "react-bootstrap";
import { capitalizeFirstLetter, CheckBoxPayloadProps } from "./filter.helper";
import styles from "./checkbox.filter.module.css";

interface HorizontalFilterProps {
  data: CheckBoxPayloadProps[];
}

const HorizontalFilterComponent: React.FC<HorizontalFilterProps> = ({
  data,
}) => {
  return (
    <>
      <ListGroup horizontal className={`${styles.horizontalFilterBg} py-2`}>
        {data.length > 0 &&
          data.map((listGroup, idx) =>
            listGroup.items.map((item, idx_) => (
              <ListGroup.Item
                key={idx_}
                className={`rounded-pill mr-5 ml-5 mx-1 ${styles.horizontalFilterItem}`}
              >
                <span className="ml-1 mr-1" key={idx_}>
                  {capitalizeFirstLetter(item.value)}
                </span>
              </ListGroup.Item>
            ))
          )}
      </ListGroup>
    </>
  );
};

export default HorizontalFilterComponent;
