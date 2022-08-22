import { useEffect, ReactElement, useState, useCallback } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
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

interface FilterItems {
  jobLocation?: number;
  jobIndustry?: number[];
  company?: number;
  employmentType?: number;
  jobLevel?: number;
  expericnceLevel?: string
}
export default function Home() {

  const [jobCirculars, setJobCirculars] = useState([] as Circular[]);
  const [meta, setMeta] = useState({
    all_total: 0,
    page: 1,
    per_page: 20,
    total: 0
  })

  const [filters, setFilters] = useState({} as FilterItems);


  useEffect(() => {
    filterJobCirculars(`page=${meta.page}&per_page=${meta.per_page}`).then((result: any) => {
      setJobCirculars(result?.data?.data)
      const { all_total, total } = result?.data?.meta;
      setMeta((prevState) => ({
        ...prevState,
        all_total,
        total,
      }))
    })

  }, [meta.page, meta.per_page]);

  const handleCheckBoxSearch = useCallback((data: CheckBoxPayloadProps) => {
    //console.log(data.type, [...data.items]);
    const { type, items } = data;
    setFilters((prev) => ({ ...prev, [type]: items }))
  }, []);

  const handlePagination = (pageNumber: number) => {
    setMeta((prevState) => ({
      ...prevState,
      page: pageNumber
    }))
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
              checkBoxType="jobIndustry"
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

            <Row className="justify-content-md-end">
              <Col md={{ span: 2, offset: 5 }}>
                <Form.Group className="">
                  <Form.Select name="perpage" value={meta.per_page} onChange={(e) => setMeta((prevState) => {
                    return ({
                      ...prevState,
                      per_page: +e.target.value
                    })
                  })} aria-label="">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <JobCircularList circulars={jobCirculars} />
            <br />
            <BasicPagination total={meta.all_total} perPage={meta.per_page} onChange={handlePagination} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <GeneralLayout>{page}</GeneralLayout>;
};
