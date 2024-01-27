import { useState } from "react";
import OtpSubmit from "../components/OtpSubmit";

const LoginOtp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setOTP] = useState(false);
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const phoneSubmit = (event) => {
    // ! Below preventDefault is used to avoid unnecessary of re-rendering the page
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }
    setOTP(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(`Login Successfull ${otp}`);
  };
  return (
    <div className="inputs">
      {!showOTP ? (
        <form onSubmit={phoneSubmit}>
          <input
            type="number"
            value={phoneNumber}
            placeholder="Enter Phone Number"
            onChange={handlePhoneNumber}
          />
          <button>Submit</button>
        </form>
      ) : (
        <div className="otprecieved">
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpSubmit length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default LoginOtp;
