import React from 'react'

const Home = () => {
    return (
        <>
            <section className='view-1'>

                <img src="src/assets/top-img.svg" alt="" />
                <div className="text">
                    <p className='sub-text'>BRANDING AGENCY</p>
                    <p className='sub-text'>FROM BERLIN</p>
                </div>
            </section>

            <section className='view-2'>
                <div className="bg">
                    <img src="src/assets/bg.webp" alt="" />
                </div>
                <div className="info">
                    <div className="title">
                        <h1>Unleash­ing Your Brand’s Potential</h1>
                        <p>  Comprehensive branding solutions that help fashion, lifestyle, and luxury brands connect with their target audience.</p>
                    </div>
                    <div className="sub-title">
                        <div className="brands">
                            <h1>01</h1>
                            <p>BRANDING</p>

                        </div>
                        <div id="line"></div>
                        <div className="brands">
                            <h1>02</h1>
                            <p>Campaigns</p>

                        </div>
                        <div id="line"></div>
                        <div className="brands">
                            <h1>03</h1>
                            <p>E-Commerce</p>

                        </div>
                        <div id="line"></div>
                        <div className="brands">
                            <h1>04</h1>
                            <p>Social MEdia</p>

                        </div>
                        <div id="line"></div>
                    </div>
                </div>
            </section >

            <section className='view-3'>
                <img src="src/assets/girls.webp" alt="" />
                <div className="txt">
                    <p className='vt'>What we do</p>
                    <div className="info-txt">
                        <h1>Tailored Brand Solu­tions</h1>
                        <p>We believe that every brand has a unique story to tell and our mission is to help you bring that story to life through exceptional branding, marketing, e-commerce, and social media strategies.</p>

                    </div>
                    <p className='vt2'>What we do</p>
                </div>
            </section>

        </>
    )
}

export default Home
