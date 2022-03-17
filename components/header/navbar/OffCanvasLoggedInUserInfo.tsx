import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

interface UserProps {
  user: {
    email: string
  }
}

const OffCanvasLoggedInUserInfo: React.FC<UserProps> = ({ user }) => {
  const slicedEmail = (email: string) => {
    return email.length > 23 ? `${email.slice(0, 23)}...` : email
  }
  return (
    <>
      <Row role="off-canvas-logged-in-user-info">
        <Col>
          <p className="text-white ">
            <span className="float-start fs-14 fw-bold mt-1" role="user-role">
              {slicedEmail(user.email)}
            </span>
            <span className="float-end">
              <Button
                variant="outline-light"
                size="sm"
                role="off-canvas-logout"
                onClick={() => console.log("logging out")}
              >
                Logout
              </Button>
            </span>
          </p>
        </Col>
      </Row>
    </>
  )
}

export default OffCanvasLoggedInUserInfo
