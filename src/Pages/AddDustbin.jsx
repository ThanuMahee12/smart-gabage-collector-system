import React,{useState} from 'react';


const AddDustBin = () =>
{
    const [ showModal, setShowModal ] = useState( false );
    const handleClick = () =>
    {
        setShowModal( true );
    };
    return (
        <>
            <div className='fixed-bottom d-flex w-100 justify-content-end p-2'>
                <button onClick={handleClick} className='d-block btn btn-dark rounded rounded-circle p-3 mb-4 me-2'>
                    <i className="bi bi-plus-circle-fill h3"></i>
                </button>
            </div>

            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New DustBin</h5>
                                <button type="button" className="btn" onClick={() => setShowModal( false )} aria-label="Close">
                                    <span className='h4' aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Dustbin Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Dustbin Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Address</label>
                                        <textarea className="form-control" id="exampleInputPassword1"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Location</label>
                                        <textarea className="form-control" id="exampleInputPassword1"></textarea>
                                    </div>


                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={() => setShowModal( false )}>Close</button>
                                <button type="submit" className="btn btn-success">Save</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}



export default AddDustBin;
