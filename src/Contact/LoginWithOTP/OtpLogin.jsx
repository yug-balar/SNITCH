import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import OtpInput from 'otp-input-react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Services/firebaseServices.config';


function OtpLogin() {
    const [otp, setOtp] = useState("")
    const [ph, setPh] = useState("")
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [user, setUser] = useState(null)


    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth,
                "recaptcha-container", {
                size: "invisible",
                callback: (response) => {
                    onSignup()
                },
                "expired-callback": () => {

                }
            },
                auth
            )
        }
    }

    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = '+' + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {

                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success('OTP sendede successfully!')
            }).catch((error) => {
                console.log("error", error);
                setLoading(false);
            });

    }

    function onOTPVerify() {
        setLoading(true)
        window.confirmationResult.confirm(otp).then(async (res) => {
            // console.log(res);
            setUser(res.user);
            setLoading(false);
        })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }
    async function logout() {
        try {
            await auth.signOut();
            console.log("User gone.");
        } catch (error) {
            console.log("error", error);

        }

    }
    // console.log(user);
    return (
        <section className=' flex items-center justify-center h-screen'>
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id='recaptcha-container'></div>
                {
                    user ? (
                        <Navigate to="/" />
                    ) : (
                        <div className='w-80 flex flex-col gap-1 rounded-lg p-4'>
                            <h1 className='text-center leading-normal text-black font-black text-3xl mb-2'>LOGIN WITH OTP</h1>
                            <h1 className='w-full text-center leading-normal text-black text-[12px] tracking-[.05rem] font-semibold mb-4'>Please enter your 10 digit mobile number</h1>
                            {
                                showOTP ?

                                    (<>
                                        <div className='bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                                            <BsFillShieldLockFill size={30} />
                                        </div>
                                        <label htmlFor='ph' className='font-bold text-xl text-emerald-500 text-center'>
                                            Enter your OTP
                                        </label>
                                        <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus className="otp-container"></OtpInput>
                                        <button onClick={onOTPVerify} className='bg-emerald-600 w-full flex items-center justify-center py-2.5 text-emerald-500 rounded'>
                                            {
                                                loading && <CgSpinner size={20} className='mt-1 animate-spin' />
                                            }
                                            <span>Verify OTP</span>
                                        </button>
                                    </>)
                                    :
                                    (<>


                                        <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                        <div className='flex justify-center flex-col w-full items-center gap-3'>

                                            <button onClick={onSignup} className='bg-black w-[150px] flex items-center justify-center py-2.5 text-white rounded-lg mt-[10px]'>
                                                {
                                                    loading && <CgSpinner size={20} className='mt-1 animate-spin' />
                                                }
                                                <span>Request OTP</span>
                                            </button>
                                            <h4 className='w-full text-center leading-normal text-black text-[12px] tracking-[.05rem] font-semibold'>A 6 digit OTP will be sent to your phone number</h4>
                                            <button onClick={logout}>Log out</button>
                                        </div>
                                    </>)
                            }
                        </div>
                    )
                }


            </div>
        </section>
    );
}

export default OtpLogin;

// 9974951802