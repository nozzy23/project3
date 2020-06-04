import React from 'react';

function Forms (){
    return (
        <form classNameName>
        <div className="form-group"/>
          <label for="formGroupExampleInput">First Name</label>
          <input className type="text" className="form-control" id="formGroupExampleInput" placeholder="Type in first Name here"></input>
        <div/>
        <div className="form-group">
          <label for="formGroupExampleInput2"> Last Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Type in last Name here"></input>
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Address</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Input address here"></input>
        </div> <div className="form-group">
          <label for="formGroupExampleInput2"> License Plate</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="License Plate Number"></input>
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Phone Number</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Input Phone number here"></input>
        </div> <div className="form-group">
          <label for="formGroupExampleInput2"> Email Address</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email Address"></input>
        </div>
        <div className>
        <button id="reserve" type="button" className="btn btn-danger btn-lg btn-block">Save Guest</button>
        </div>
      </form>

        );
    }
 export default Forms;
    