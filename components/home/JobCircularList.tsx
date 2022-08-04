import { Col, Row } from "react-bootstrap";
import { JobCirculars } from "../interfaces/job.circulars";

const JobCircularList: React.FC<JobCirculars> = ({circulars}) => {
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
                    <img
                        src={``}
                        className="img-fluid"
                        alt={jobCircular.title}
                    />
                    </Col>
                    <Col lg={10} md={10}>
                    <p className="mt-2">{jobCircular.created_at}</p>
                    <h4>
                        <b>{jobCircular.title}</b>
                    </h4>
                    <p>{jobCircular?.company?.companyName}</p>
                    <p>{jobCircular.salary}</p>
                    <p>{`Dhaka Manually`}</p>
                    </Col>
                </Row>
                </Col>
            ))}
        </Row>
    </>
  );
};

export default JobCircularList;