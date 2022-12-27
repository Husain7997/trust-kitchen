import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = (event)=>{
        event.preventDefault();
        const form= event.target;
        const title= form.title.value;
        const imgURL= form.imgURL.value;
        const prize= form.prize.value;
        const rating= form.rating.value;
        const textarea= form.textarea.value;
        console.log(title, prize, rating, textarea);
    }
    return (
        <form onSubmit={handleAddService} className="text-center mb-10" >
            <h2 className="text-2xl font-bold">Add a New Service</h2>
            <div className="card w-full ">
                <div className="card-body grid grid-cols-1 md:grid-cols-2">

                    <input type="text" name='title' placeholder="title" className="input input-bordered" />
                    <input type="text" name='imgURL' placeholder="imgURL" className="input input-bordered" />
                    <input type="text" name='prize' placeholder="prize" className="input input-bordered" />
                    <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
     </div>
            </div>
            <div className="indicator">
                <div className="indicator-item indicator-bottom">
                    <button button='submmit' className="btn btn-primary">Add Service</button>
                </div>
                <div className="card border">
                    <div className="card-body">
                        <textarea name='textarea' className="textarea textarea-primary" placeholder="description"></textarea>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default AddService;