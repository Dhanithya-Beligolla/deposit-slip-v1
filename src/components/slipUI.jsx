import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./slipUI.css"
import { db } from './firbase'
import { setDoc, doc } from 'firebase/firestore'
import { use } from "react"
import logo from "../assets/dfcc-logo.png"

function slipUI() {
    const navigate = useNavigate();

    const [date, setDate] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolder, setAccountHolder] = useState('');
    const [currency, setCurrency] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [depositorName, setDepositorName] = useState('');
    const [nicPassport, setNicPassport] = useState('');
    const [addressTelephone, setAddressTelephone] = useState('');
    const [purpose, setPurpose] = useState('');
    const [signature, setSignature] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "deposit-slips", accountNumber);
        await setDoc(docRef, {
            date: date,
            accountNumber: accountNumber,
            accountHolder: accountHolder,
            currency: currency,
            totalAmount: totalAmount,
            depositorName: depositorName,
            nicPassport: nicPassport,
            addressTelephone: addressTelephone,
            purpose: purpose,
            signature: signature
        });
        navigate('/');
    }

  return (
    <div>
        <div className="form-container">
        <image src={logo} alt="DFCC Bank Logo" className="logo" />
        <h2>Bank Deposit Slip</h2>
        <form onSubmit={handleSubmit}>
            {/* <!-- Date --> */}
            <div className="form-group">
                <label for="date">Date <span className="multi-lang">(දිනය / தேதி)</span></label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>

            {/* <!-- Account Number --> */}
            <div className="form-group">
                <label for="account-number">Account Number <span className="multi-lang">(ගිණුම් අංකය / கணக்கு எண்)</span></label>
                <input type="text" id="account-number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} name="account-number" required />
            </div>

            {/* <!-- Name of Account Holder --> */}
            <div className="form-group">
                <label for="account-holder">Name of Account Holder <span className="multi-lang">(ගිණුම්කරුගේ නම / கணக்குதாரரின் பெயர்)</span></label>
                <input type="text" id="account-holder" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} name="account-holder" required />
            </div>

            {/* <!-- Currency --> */}
            <div className="form-group">
                <label for="currency">Currency <span className="multi-lang">(මුදල් වර්ගය / நாணய வகை)</span></label>
                <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} name="currency" required>
                    <option value="">Select Currency</option>
                    <option value="LKR">LKR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

            {/* <!-- Total Amount --> */}
            <div className="form-group">
                <label for="total-amount">Total Amount <span className="multi-lang">(මුළු මුදල / மொத்த தொகை)</span></label>
                <input type="number" id="total-amount" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} name="total-amount" step="0.01" required />
            </div>

            {/* <!-- Depositor's Name --> */}
            <div className="form-group">
                <label for="depositor-name">Depositor's Name <span className="multi-lang">(තැන්පත්කරුගේ නම / வைப்பு நபரின் பெயர்)</span></label>
                <input type="text" id="depositor-name" value={depositorName} onChange={(e) => setDepositorName(e.target.value)} name="depositor-name" required />
            </div>

            {/* <!-- NIC/Passport Number --> */}
            <div className="form-group">
                <label for="nic-passport">NIC/Passport Number <span className="multi-lang">(ජා.හැ.අංකය / கடவுச்சீட்டு எண்)</span></label>
                <input type="text" id="nic-passport" value={nicPassport} onChange={(e) => setNicPassport(e.target.value)} name="nic-passport" required />
            </div>

            {/* <!-- Address and Telephone --> */}
            <div className="form-group">
                <label for="address-telephone">Address and Telephone Number <span className="multi-lang">(ලිපිනය සහ දුරකථන අංකය / முகவரி மற்றும் தொலைபேசி)</span></label>
                <textarea id="address-telephone" value={addressTelephone} onChange={(e) => setAddressTelephone(e.target.value)} name="address-telephone" rows="3" required></textarea>
            </div>

            {/* <!-- Purpose and Source of Funds --> */}
            <div className="form-group">
                <label for="purpose">Purpose and Source of Funds <span className="multi-lang">(අරමුණ සහ මුදල් මූලාශ්රය / நோக்கமும் நிதியின் மூலம்)</span></label>
                <textarea id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} name="purpose" rows="3" required></textarea>
            </div>

            {/* <!-- Depositor's Signature --> */}
            <div className="form-group">
                <label for="signature">Depositor's Signature <span className="multi-lang">(තැන්පත්කරුගේ අත්සන / வைப்பு நபரின் கையொப்பம்)</span></label>
                <input type="text" id="signature" value={signature} onChange={(e) => setSignature(e.target.value)} name="signature" required />
            </div>

            {/* <!-- Submit Button --> */}
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default slipUI