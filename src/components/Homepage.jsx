import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value="1337" /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value="57" /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value="$1,234,567,890,987" /></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value="$7,777,777,777" /></Col>
      <Col span={12}><Statistic title="Total Markets" value="5555" /></Col>
    </Row>
    </>
  )
}

export default Homepage