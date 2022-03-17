import GeneralLayout from "@/components/layouts/GeneralLayout";
import CheckBoxSearchComponent from "@/components/search/filters/CheckBoxSearchComponent";
import { CheckBoxPayloadProps } from "@/components/search/filters/filter.helper";
import { ReactElement } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const handleCheckBoxSearch = (data: CheckBoxPayloadProps) => {
    // console.log("received data in parent component ,,,: ");
    // console.log(data.type, [...data.items]);
  };

  const items = [
    { id: 1, title: "remote", alias: "remote", checked: false },
    { id: 2, title: "dhaka", alias: "dhaka", checked: false },
    { id: 3, title: "chittagong", alias: "chittagong" },
    { id: 4, title: "rajshahi", alias: "rajshahi", checked: false },
    { id: 5, title: "khulna", alias: "khulna", checked: false },
    { id: 6, title: "sylhet", alias: "sylhet", checked: false },
    { id: 7, title: "barishal", alias: "barishal", checked: false },
    { id: 8, title: "mymensingh", alias: "mymensingh", checked: false },
    { id: 9, title: "rangpur", alias: "rangpur", checked: false },
    { id: 10, title: "bogra", alias: "bogra", checked: false },
  ];

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col lg={3} md={4} sm={0} xs={0}>
            <CheckBoxSearchComponent
              checkBoxType="city"
              items={items}
              onChange={handleCheckBoxSearch}
              showItemFilterInput={true}
            />
          </Col>
          <Col lg={9} md={8} sm={12} xs={12}>
            Admin Data
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <GeneralLayout>{page}</GeneralLayout>;
};
