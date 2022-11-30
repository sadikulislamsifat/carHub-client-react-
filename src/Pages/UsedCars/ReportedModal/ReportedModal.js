import React from 'react';

const ReportedModal = ({cars}) => {
    console.log(cars)
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="reportedModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="reportedModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Why You Report {cars?.name} ?</h3>
    <div className='mt-9 w-full'>
    <select className="select select-bordered w-full ">
  <option disabled selected>Scam issue?</option>
  <option>Toxic behaviour?</option>
  <option>Others</option>
</select>
 <div className='border-2 mt-9 rounded-xl'>
 <button type="submit" className='btn w-full  btn-ghost '>report</button>
 </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReportedModal;