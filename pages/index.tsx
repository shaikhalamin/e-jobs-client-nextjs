import { useEffect, ReactElement, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import CheckBoxSearchComponent from "@/components/search/filters/CheckBoxSearchComponent";
import { CheckBoxPayloadProps } from "@/components/search/filters/filter.helper";
import HorizontalFilterComponent from "@/components/search/filters/HorizontalFilterComponent";
import {
  checkBoxExperienceLevel,
  checkBoxCities,
  checkBoxIndustries,
  jobLists,
} from "@/components/data/index.data";
import { filterJobCirculars, getJobCirculars } from "helpers/api/job-circulars";
import JobCircularList from "@/components/home/JobCircularList";
import { Circular } from "@/components/interfaces/job.circulars";
import BasicPagination from "@/components/pagination/BasicPagination";

export default function Home() {

  const [jobCirculars, setJobCirculars] = useState([] as Circular[]);
  const [meta, setMeta] = useState({
    all_total: 0,
    page: 0,
    per_page: 0,
    total: 0
  })

  useEffect(() => {
    getJobCirculars().then((result: any) => {
      setJobData(result)
    });
  }, []);

  const setJobData = (result: any) => {
    setJobCirculars(result?.data?.data)
    setMeta(result?.data?.meta);
  }


  const handleCheckBoxSearch = (data: CheckBoxPayloadProps) => {
    // console.log("received data in parent component ,,,: ");
    // console.log(data.type, [...data.items]);
  };

  const handlePagination = (pageNumber: number) => {
    filterJobCirculars(`page=${pageNumber}&per_page=${20}`).then((result: any) => {
      setJobData(result)
    })
  }

  return (
    <div>
      <Container>
        <Row className="mt-3 mb-5">
          <Col lg={3} md={4} sm={0} xs={0} className="mr-1 ml-1">
            <CheckBoxSearchComponent
              checkBoxType="cities"
              items={checkBoxCities}
              onChange={handleCheckBoxSearch}
              showItemFilterInput={true}
              activeKey="0"
              cssClass="mt-3 mb-1"
            />
            <CheckBoxSearchComponent
              checkBoxType="jobIndustries"
              items={checkBoxIndustries}
              onChange={handleCheckBoxSearch}
              showItemFilterInput={true}
              activeKey="0"
              cssClass="mt-3 mb-2"
            />
            <CheckBoxSearchComponent
              checkBoxType="expericnceLevel"
              items={checkBoxExperienceLevel}
              onChange={handleCheckBoxSearch}
              activeKey="0"
              cssClass="mt-3 mb-2"
            />
          </Col>
          <Col lg={9} md={8} sm={12} xs={12} className="ml-3">

            <JobCircularList circulars={jobCirculars} />
            <br />
            <BasicPagination total={meta.all_total} onChange={handlePagination} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <GeneralLayout>{page}</GeneralLayout>;
};
