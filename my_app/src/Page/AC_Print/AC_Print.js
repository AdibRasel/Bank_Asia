import React, { Component } from 'react'

// bank logo 
import Bank_Logo from "../../Assets/Bank_Asia_Logo_Print.jpg"

// css import 
import "./AC_Print.css"
import "./Device.css"


export default class AC_Print extends Component {
  render() {

    function Print(){
        const printContents = document.getElementById("Print_Section").innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }



    return (<div className='full_page'>
    {/* ======return start========== */}

    <div className="Ac_Title">
        Account Information
    </div>
    
    {/* ==== AC Info Input Box ==== */}
    <div className="AC_Info_Input_Box">
            
        <div className="Ac_Name">
            <p>Account Name:</p>
            <input className='input_style' type="text" placeholder='Account Name' />
        </div>
        <div className="Ac_Number">
            <p>Account Number:</p>
            <input className='input_style' type="number" placeholder='Account Number' />
        </div>
        <div className="Ac_Phon_No">
            <p>Mobile Number:</p>
            <input className='input_style' type="number" placeholder='Mobile Number'/>
        </div>

    </div>
    <button className='button'>Submit</button>
    {/*==== Submit Button ======*/}




  {/* ===== Print Section ===== */}
  <section className='Main_Right_Side' id='Print_Section'>
    <div className="Print_Section Bg_white">
      <div className="Title Bg_white">
        <div className="Left_Side Bg_white">
          <img className='Logo Bg_white' src={Bank_Logo} alt="Bank Asia" />
        </div>
        <div className="Right_Side Bg_white">
          <div className="AgentBanking Bg_white">Agent Banking</div>
          <div className="Address Bg_white">Shahapur Bazar, Chatkhil, Noakhali</div>
        </div>
      </div>

      <div className="Ac_Info">Account Information</div>
      <div className="Dynamic_Text Bg_white">
        <table>
          <tr>
            <td><div className="AC_Title Bg_white">A/C Title</div></td>
            <td><div className="Dynamic_AC_Info" id='AC_Title'></div></td>
          </tr>
          <tr>
            <td><div className="AC_No Bg_white">A/C No</div></td>
            <td><div className="Dynamic_AC_Info" id='AC_No'></div></td>
          </tr>
          <tr>
            <td><div className="AC_Mobile_No Bg_white">A/C Mobile No</div></td>
            <td><div className="Dynamic_AC_Info" id='AC_Mobile_No'></div></td>
          </tr>
        </table>
      </div>
      <div className="Emergency_Text Bg_white">
        Routing Number : <strong className='Bg_white'>070270602</strong> <br />
        Branch Name : <strong className='Bg_white'>Agent Banking</strong> <br />
        Swift Code : <strong className='Bg_white'>BALBBDDH</strong> <br />
        Emergency Contact : <strong className='Bg_white'>+8801711055368</strong>
      </div>
    </div>

  </section>
  <button className='Submit_btn Print_btn' id='PrintTest' onClick={Print} >Print</button>









    {/* ======return end========== */}
    </div>)
  }
}
