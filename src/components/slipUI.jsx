import React from 'react'
import "./slipUI.css"
import { db } from './firbase'
import { setDoc, doc } from 'firebase/firestore'

function slipUI() {
  return (
    <div>
        <div className="form-container">
        <image src="dfcc-logo.png" alt="DFCC Bank Logo" className="logo" />
        <h2>Bank Deposit Slip Head Office</h2>
        <form>
            {/* <!-- Date --> */}
            <div className="form-group">
                <label for="date">Date <span className="multi-lang">(දිනය / தேதி)</span></label>
                <input type="date" id="date" name="date" required />
            </div>

            {/* <!-- Account Number --> */}
            <div className="form-group">
                <label for="account-number">Account Number <span className="multi-lang">(ගිණුම් අංකය / கணக்கு எண்)</span></label>
                <input type="text" id="account-number" name="account-number" required />
            </div>

            {/* <!-- Name of Account Holder --> */}
            <div className="form-group">
                <label for="account-holder">Name of Account Holder <span className="multi-lang">(ගිණුම්කරුගේ නම / கணக்குதாரரின் பெயர்)</span></label>
                <input type="text" id="account-holder" name="account-holder" required />
            </div>

            {/* <!-- Currency --> */}
            <div className="form-group">
                <label for="currency">Currency <span className="multi-lang">(මුදල් වර්ගය / நாணய வகை)</span></label>
                <select id="currency" name="currency" required>
                    <option value="">Select Currency</option>
                    <option value="LKR">LKR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

            {/* <!-- Total Amount --> */}
            <div className="form-group">
                <label for="total-amount">Total Amount <span className="multi-lang">(මුළු මුදල / மொத்த தொகை)</span></label>
                <input type="number" id="total-amount" name="total-amount" step="0.01" required />
            </div>

            {/* <!-- Depositor's Name --> */}
            <div className="form-group">
                <label for="depositor-name">Depositor's Name <span className="multi-lang">(තැන්පත්කරුගේ නම / வைப்பு நபரின் பெயர்)</span></label>
                <input type="text" id="depositor-name" name="depositor-name" required />
            </div>

            {/* <!-- NIC/Passport Number --> */}
            <div className="form-group">
                <label for="nic-passport">NIC/Passport Number <span className="multi-lang">(ජා.හැ.අංකය / கடவுச்சீட்டு எண்)</span></label>
                <input type="text" id="nic-passport" name="nic-passport" required />
            </div>

            {/* <!-- Address and Telephone --> */}
            <div className="form-group">
                <label for="address-telephone">Address and Telephone Number <span className="multi-lang">(ලිපිනය සහ දුරකථන අංකය / முகவரி மற்றும் தொலைபேசி)</span></label>
                <textarea id="address-telephone" name="address-telephone" rows="3" required></textarea>
            </div>

            {/* <!-- Purpose and Source of Funds --> */}
            <div className="form-group">
                <label for="purpose">Purpose and Source of Funds <span className="multi-lang">(අරමුණ සහ මුදල් මූලාශ්රය / நோக்கமும் நிதியின் மூலம்)</span></label>
                <textarea id="purpose" name="purpose" rows="3" required></textarea>
            </div>

            {/* <!-- Depositor's Signature --> */}
            <div className="form-group">
                <label for="signature">Depositor's Signature <span className="multi-lang">(තැන්පත්කරුගේ අත්සන / வைப்பு நபரின் கையொப்பம்)</span></label>
                <input type="text" id="signature" name="signature" required />
            </div>

            {/* <!-- Submit Button --> */}
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default slipUI