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
import { getJobCirculars } from "helpers/api/job-circulars";
import JobCircularList from "@/components/home/JobCircularList";
import { Circular } from "@/components/interfaces/job.circulars";

export default function Home() {

  const [jobCirculars, setJobCirculars] = useState([] as Circular[]);

  useEffect(() => {
    getJobCirculars().then((result:any) => {
      setJobCirculars(result.data.data)
    });
  }, []);

  const handleCheckBoxSearch = (data: CheckBoxPayloadProps) => {
    console.log("received data in parent component ,,,: ");
    console.log(data.type, [...data.items]);
  };

  // const popularFilterItems: CheckBoxPayloadProps[] = [
  //   {
  //     type: "cities",
  //     items: ["Remote", "dhaka"],
  //   },
  //   {
  //     type: "job-industries",
  //     items: ["it-telecommunication", "accounting", "agriculture"],
  //   },
  // ];

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
            {/* <Row className="mb-3">
              <Col lg={2} md={2} sm={2} xs={2}>
                <h6 className="mt-3">Popular Filters : </h6>
              </Col>
              <Col lg={10} md={10} sm={10} xs={10}>
                <HorizontalFilterComponent data={popularFilterItems} />
              </Col>
            </Row> */}

            <JobCircularList circulars={jobCirculars} />

            {/* <Row className="mt-3 mb-3">
              {jobLists &&
                jobLists.map((job, idx_job) => (
                  <Col
                    lg={12}
                    md={12}
                    key={idx_job}
                    className="mt-3 mb-3 border"
                  >
                    <Row>
                      <Col lg={2} md={2} className="border-right">
                        <img
                          src={job.image_link}
                          className="img-fluid"
                          alt={job.job_title}
                        />
                      </Col>
                      <Col lg={10} md={10}>
                        <p className="mt-2">{job.created_date}</p>
                        <h4>
                          <b>{job.job_title}</b>
                        </h4>
                        <p>{job.company_name}</p>
                        <p>{job.salary ? job.salary : ""}</p>
                        <p>{job.job_location ? job.job_location : ""}</p>
                      </Col>
                    </Row>
                  </Col>
                ))}
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <GeneralLayout>{page}</GeneralLayout>;
};
