import { Row, Col, Button } from 'react-bootstrap'
import styles from '@/components/header/navbar/generalNavbar.module.css'

const OffCanvasNavLoginButton: React.FC = () => {
  return (
    <Row role="off-canvas-nav-login-button">
      <Col md={{ span: 12 }} lg={{ span: 12 }}>
        <Button
          href={`/login`}
          variant="outline-light"
          size="sm"
          className={`${styles.width100} ${styles.loginButton} bg-white`}
        >
          ログイン
        </Button>
      </Col>
    </Row>
  )
}

export default OffCanvasNavLoginButton
