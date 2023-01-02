import React, { useRef } from 'react';
// import {useRef, useEffect} from 'react';

// javascript file import 
import "./Print_AC.js"

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// Css file import 
import "./Ac_Print.css"
import "./device.css"

// Logo import
import Bank_Logo from "../../Assets/Bank_Asia_Logo_Print.jpg"

export default function Ac_details_print() {

  // Print = test()

  // const ref = useRef(null)



  // const Print =()=>{

  //   const printContents = document.getElementById("Print_Section").innerHTML;
  //   const originalContents = document.body.innerHTML;

  //   document.body.innerHTML = printContents;

  //   window.print();

  //   document.body.innerHTML = originalContents;

  // }

  function Print(){
      const printContents = document.getElementById("Print_Section").innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
  }



  let Name, Account_No, Mobile = useRef()

  const Submit=()=>{
    let Account_Name = Name.value;
    let Account_Number = Account_No.value;
    let Account_Mobile_No = Mobile.value;


    if(Account_Name.length === 0 ){
      NotificationManager.error('Please enter correct name');
    }else if(Account_Number.length <= 12 || Account_Number.length  >= 14){
      NotificationManager.error('Please enter the correct Account Number');
    }else if(Account_Mobile_No.length <= 10 || Account_Mobile_No.length  >= 12){
      NotificationManager.error('Please enter correct Mobile Number');
    }else{
      NotificationManager.success('Congratulations! you can print this account information.');

      document.getElementById("AC_Title").innerHTML = Account_Name;
      document.getElementById("AC_No").innerHTML = Account_Number;
      document.getElementById("AC_Mobile_No").innerHTML = Account_Mobile_No;
  
    }

  }


  

  return (<div className='AC_Print_Design'>

  <section className='Main_Left_Side'>
    <div className="Input_Box">
      <div className="Input_Title">
        Account Information
      </div><hr />
      <div className="All_Input_Item">
          <p>Account Name: <input className='input_item' type="text" id='Name' ref={(input)=>Name = input} placeholder="Account Name" /></p>
          <p>Account Number: <input className='input_item' type="number" id='Account' ref={(input)=>Account_No = input} placeholder="Account Number" /></p>
          <p>Mobile Number: <input className='input_item' type="text" id='Mobile' ref={(input)=>Mobile = input} placeholder="Mobile Number" /></p>
      </div>
    <button className='Submit_btn' onClick={Submit} >Submit</button>
    </div>
  </section>  

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
    <NotificationContainer/>

  </section>
    {/* <button className='Submit_btn Print_btn' id='PrintTest' onClick={Print}>Print</button> */}
    <button className='Submit_btn Print_btn' id='PrintTest' onClick={Print} >Print</button>
  


  
  
  </div>)


}