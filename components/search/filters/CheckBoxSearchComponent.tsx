import React, { KeyboardEvent, useCallback, useEffect, useMemo } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import styles from "./checkbox.filter.module.css";
import { capitalizeFirstLetter, CheckBoxFilterProps } from "./filter.helper";

const CheckBoxSearchComponent: React.FC<CheckBoxFilterProps> = ({
  checkBoxType,
  items,
  onChange,
  showItemFilterInput = false,
}) => {
  const [inputItems, setInputItems] = React.useState(items);
  const [filterInputs, setFilterInputs] = React.useState([] as string[]);
  const [searched, setSearched] = React.useState(false);

  const handleFilterInputChange = (value: string) => {
    let checker = false;
    if (!filterInputs.includes(value)) {
      setFilterInputs((prevState) => [...prevState, value]);
      toggleCheckBox(value, true);
      checker = true;
    } else {
      setFilterInputs((prevState) => [
        ...prevState.filter((item) => item !== value),
      ]);
      toggleCheckBox(value, false);
      checker = false;
    }

    if (searched) {
      const checkExist = filterInputs.includes(value);
      const missingState = [...filterInputs, !checkExist && value];
      const modifiedSearchArray = inputItems.map((item) => {
        if (missingState.includes(item.alias)) {
          return { ...item, checked: checker };
        } else {
          return { ...item };
        }
      });
      setInputItems(modifiedSearchArray);
    }
  };

  const handleInputItemChange = (e: KeyboardEvent) => {
    const data = (e.target as HTMLInputElement).value;
    const filtered = items.filter((item) => item.alias.search(data) !== -1);
    if (data) {
      setInputItems([...filtered]);
      setSearched(true);
    } else {
      setInputItems(items);
      setSearched(false);
    }
  };

  const toggleCheckBox = useCallback(
    (value: string, checked: boolean) => {
      const addChecked = items.find((item) => item.alias === value);
      addChecked &&
        items.splice(
          items.findIndex((item) => item.alias === value),
          1,
          {
            ...addChecked,
            checked: checked,
          }
        );
    },
    [items]
  );

  useEffect(() => {
    onChange({
      type: checkBoxType,
      items: filterInputs,
    });
  }, [filterInputs, onChange, checkBoxType]);

  return (
    <div>
      <Accordion defaultActiveKey="1" alwaysOpen={true}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-white">
            {capitalizeFirstLetter(checkBoxType)}
          </Accordion.Header>
          <Accordion.Body>
            {showItemFilterInput && (
              <Form>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Form.Control
                      placeholder={`Search in ${checkBoxType} ...`}
                      type="text"
                      onKeyUp={(e) => handleInputItemChange(e)}
                    />
                  </Col>
                </Row>
              </Form>
            )}
            <Form>
              {inputItems.length > 0 &&
                inputItems.map((data) => (
                  <div key={data.id} className="mt-2 mb-1">
                    <Form.Check type={"checkbox"} id={`check-api-${data.id}`}>
                      <Form.Check.Input
                        type={"checkbox"}
                        className={`${styles.checkboxInputSize}`}
                        value={data.alias}
                        checked={!!data.checked}
                        onChange={(e) =>
                          handleFilterInputChange(e.target.value)
                        }
                      />
                      <Form.Check.Label
                        className={`${styles.checkboxLabelSize}`}
                      >
                        {capitalizeFirstLetter(data.title)}
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CheckBoxSearchComponent;
