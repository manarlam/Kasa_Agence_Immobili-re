import React from 'react';
import Banner from '../../components/banner/Banner';
import HomeBanner from '../../assets/images/banner/home_banner.png';
import Gallery from '../../components/gallery/gallery'; 



function Home() {
  return (
  <main className="main">
    <div className="home">
      <Banner image={HomeBanner} title="Chez vous, partout et ailleurs"/>
      <Gallery />
    </div>
  </main>
  );
}

export default Home;