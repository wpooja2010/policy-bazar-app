import React from 'react';
import smallCard from '../Images/small card.png'

const AedCard = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 small-card'>
                        <div class="card-product-logo">
                            <img src={smallCard} alt="product-logo" />

                        </div>
                    </div>
                    <div className='col-7 mid-card'>
                        <div className='row border border-bottom-primary'>
                            <div className='col-4'>
                                <div className='row'>

                                    <h5>I-Med</h5>
                                    <div className='col-5 ml-0 mr-0'>
                                        <p>Network<i className="fa-solid ms-2 fa-info"></i>
                                        </p>
                                    </div>
                                    <div className='col-7 ml-0 mr-0'>
                                        <span className='d-flex'>
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item"><a href="#">Network</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page">PCP</li>
                                                </ol>
                                            </nav>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <h5>Medical Cover (AED)</h5>
                                <p>1500.00</p>
                            </div>
                            <div className='col-4'>
                                <h5>Pharmacy Limit</h5>
                                <p>Upto AED 1500.00</p>
                            </div>
                        </div>
                        <div className='row border border-bottom-primary'>
                            <div className='col-3'>
                                <div className='row'>
                                    <h5>Copay</h5>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-4 ml-0 mr-0'>
                                        <span>Dignosis:Nill</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-4 ml-0 mr-0'>
                                        <span>Pharmacy:20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='row mt-5'>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-4 ml-0 mr-0'>
                                        <span>Physical Consultation:20%</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-4 ml-0 mr-0'>
                                        <span>physiotherpy:20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <button className='btn aed-yearly mt-4 ms-3'> AED 875 Yearly</button>
                            </div>
                        </div>
                        <div className='row mt-3 mb-3' style={{background:"#fff7db",color:"black"}}>
                            <p>What you should know?
                                You need to provide your trade license copy if you wish to purchase this plan</p>
                        </div>
                    </div>

                    <div className='col-2'>
                           <div className='fine-card'>
                            <h4 className='mt-2 mb-4'>Quickly find</h4>
                            <div className='row'>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-8 ml-0 mr-0'>
                                        <span style={{color:"#0c93fd"}}>Value for Money plans</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1 ml-0 mr-0'>
                                        <i className="fa-solid fa-book"></i>
                                    </div>
                                    <div className='col-8 ml-0 mr-0'>
                                        <span style={{color:"#0c93fd"}}>basic plans for visa</span>
                                    </div>
                                </div>
                           </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AedCard;