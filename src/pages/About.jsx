import { Divide } from 'phosphor-react'
import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <div className='about-content'>
                <h2>Everything you need to easily build a professional website</h2>
                <h6>What if creating a website was easy? With Pagio Website Builder, it is.
                    Youll control your website and be able to edit quickly, easily and hassle-free</h6>
            </div>
            <div className='card-wrap d-flex mt-5' >
                <div className='card'>
                    <img className='cart-img-top' src='https://s3.eu-west-2.amazonaws.com/swiftbuilder/sites/394/sd_64c0e4ebc17f8.png?ts=2023-07-26%2009%3A18%3A35' alt='cart' />
                    <div className='card-body'>
                        <h5>Drag-and-drop website builder</h5>
                        <h6 className="card-text">Code-free website builder allows you to drag and drop your content to create your website.</h6>
                    </div>
                </div>
                <div className='card'>
                    <img className='cart-img-top' src='https://s3.eu-west-2.amazonaws.com/swiftbuilder/sites/394/sd_64c0e4f35335f.png?ts=2023-07-26%2009%3A18%3A43' alt='cart' />
                    <div className='card-body'>
                        <h5>Mobile friendly</h5>
                        <h6 className="card-text">The page builder is set up in a way which makes the websites very mobile friendly.</h6>
                    </div>
                </div>
                <div className='card'>
                    <img className='cart-img-top' src='https://s3.eu-west-2.amazonaws.com/swiftbuilder/sites/394/sd_64c0e4f51f8fa.png?ts=2023-07-26%2009%3A18%3A45' alt='cart' />
                    <div className='card-body'>
                        <h5>Put your content where you want it</h5>
                        <h6 className="card-text">Add text, images, videos and contact forms to any page and put it exactly where you want it.</h6>
                    </div>
                </div>
            </div>

            {/* <div className="card" style="width: 18rem;">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                </div>
            </div> */}

        </>
    )
}

export default About