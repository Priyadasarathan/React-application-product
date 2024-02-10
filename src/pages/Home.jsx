import React from 'react'
import './Home.css';
function Home() {
    return (
        <>
            <div className='whole d-flex'>
                <div className='content mt-5'>
                    <h2>Create a website with the UK's best website builder</h2>
                    <p>Easily build your own professional website with our drag-and-drop website builder. Or we can create it for you for free.</p>
                    <button>Get started for free</button>
                    <h5 className=''> No credit card required</h5>
                </div>
                <div className='mt-5'>
                    <img src='https://static.swiftbuilder.co.uk/img/homepage-screen.png' width='100%' height='100%' />
                </div>
            </div>
            <div className='card-wrap2  mt-5' >
                <div className='card mt-5'>
                    <h5>Drag-and-drop website builder</h5>
                    <h6 className="card-text">Code-free website builder allows you to drag and drop your content to create your website.</h6>
                </div>
                <div className='card mt-5'>
                    <h5>Mobile friendly</h5>
                    <h6 className="card-text">The page builder is set up in a way which makes the websites very mobile friendly.</h6>
                </div>
                <div className='card mt-5'>
                    <h5>Put your content where you want it</h5>
                    <h6 className="card-text">Add text, images, videos and contact forms to any page and put it exactly where you want it.</h6>
                </div>
            </div>
        </>
    )
}

export default Home