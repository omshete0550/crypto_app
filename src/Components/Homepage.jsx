import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cyrptocurrencies, News } from '../Components';
const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStatus = data?.data?.stats;

  if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStatus.total)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStatus.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStatus.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStatus.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStatus.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in World</Title>
        <Title level={3} className="show-more"><Link to="/cyrptocurrencies">Show More</Link></Title>
      </div>
      <Cyrptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />


    </>
  )
}

export default Homepage