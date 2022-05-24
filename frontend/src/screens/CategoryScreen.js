import React from 'react';


function CategoryScreen() {
  

  return (
    <>
    <section className="banner-cat">
      <div className="about-cat">
        <img src="../images/Four-Types.jpg" alt="" />
      </div>
    
    </section>
    <section className="preview" id="bows">
      <h2>BOWS</h2>
      <div className="row-slick" style={{width: "80%",margin: "0 auto"}}>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow1.png" alt="" width="50%" />
            <figcaption>Xakt Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow2.png" alt="" width="50%" />
            <figcaption>Arcos Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow3.png" width="50%" />
            <figcaption>Xceed Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow4.png" alt="" width="50%" />
            <figcaption>Formula XI Riser</figcaption>
          </a>
        </figure>
      </div>
    </section>

    <section className="preview" id="bows">
      <h2 align="center"></h2>
      <div className="row-slick" style={{width: "80%", margin: "0 auto"}}>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow1.png" alt="" width="50%" />
            <figcaption>Xakt Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow2.png" alt="" width="50%" />
            <figcaption>Arcos Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow3.png" width="50%" />
            <figcaption>Xceed Riser</figcaption>
          </a>
        </figure>
        <figure className="item">
          <a href="/HTML/info.html">
            <img src="../images/bow4.png" alt="" width="50%" />
            <figcaption>Formula XI Riser</figcaption>
          </a>
        </figure>
      </div>
    </section>
    </>
  );
}
export default CategoryScreen;
