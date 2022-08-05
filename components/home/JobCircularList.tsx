import Image from 'next/image'
import { Col, Row } from "react-bootstrap";
import { JobCirculars } from "../interfaces/job.circulars";
import API_URLS from "helpers/api/common/api.urls";

const JobCircularList: React.FC<JobCirculars> = ({circulars}) => {
  const imageUrl = `${API_URLS.compaies.api_uploads}/`;
  return (
    <>
      <Row className="mt-3 mb-3">
            {circulars.length > 0 &&
            circulars.map((jobCircular, idx_job) => (
                <Col
                lg={12}
                md={12}
                key={idx_job}
                className="mt-3 mb-3 border"
                >
                <Row>
                    <Col lg={2} md={2} className="border-right">

                    <Image
                      src={`${imageUrl}${jobCircular.company.companyLogo}`}
                      alt={jobCircular.company.companyName}
                      width={`200`}
                      height={`200`}
                      className="img-fluid"
                    />
                    </Col>
                    <Col lg={10} md={10}>
                    <p className="mt-2">{ new Date(jobCircular.created_at).toDateString()}</p>
                    <h4>
                        <b>{jobCircular.title}</b>
                    </h4>
                    <p>{jobCircular?.company?.companyName}</p>
                    <p>{jobCircular.salary}</p>
                    </Col>
                </Row>
                </Col>
            ))}
        </Row>
    </>
  );
};

export default JobCircularList;