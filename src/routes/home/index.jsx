import {connect} from "react-redux";
import {onNavStyleChange} from "../../appRedux/actions";
import Auxiliary from "util/Auxiliary";
import { Col, Row, Typography } from "antd";
import Portfolio from 'components/dashboard/Crypto/Portfolio';
import BalanceHistory from 'components/dashboard/Crypto/BalanceHistory';
import TaskList from '../../components/dashboard/CRM/TaskList';
import { taskList } from "../main/dashboard/CRM/data";
import WidgetHeader from '../../components/WidgetHeader/index';

const Home = ({navStyle, onNavStyleChange}) => {
  return <Auxiliary>
    <Row>
      {/* <Col xl={12} lg={24} md={12} sm={24} xs={24}>
        <Portfolio/>
      </Col>
      <Col xl={12} lg={24} md={12} sm={24} xs={24}>
        <BalanceHistory/>  
      </Col> */}
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <WidgetHeader styleName={"danger"} title={<Typography.Text type="danger">Overdue</Typography.Text>}/>
        <TaskList taskList={taskList}/>
        <WidgetHeader title="Today"/>
        <TaskList taskList={taskList}/>
      </Col>
    </Row>
  </Auxiliary>
};

const mapStateToProps = ({settings}) => {
  const {navStyle} = settings;
  return {navStyle}
};
export default connect(mapStateToProps, {onNavStyleChange})(Home);

