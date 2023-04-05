import React from 'react';

function Gallery({ data }) {
    return (
        <div className="d-flex justify-content-center">
                <div className="row">
                    {data.map((image) => (
                        <div key={image.id} className="card col-md-4 m-3 p-3" style={{ width: "15rem" }}>
                            {/* <img src="..." className="card-img-top" alt="..."> */}
                        {/* <div key={image.id} className='col-md-4'> */}
                            <img

                                className="card-img-top"
                                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                                height="200"
                                width="200"
                                alt={image.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Gallery;
