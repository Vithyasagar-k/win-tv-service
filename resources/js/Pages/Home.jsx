import { useForm } from "@inertiajs/react";
import React, { useState } from 'react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import Marquee from 'react-fast-marquee';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from "@/Components/InputError";


export default function Home() {

  const { data, setData, post, reset, processing, errors } = useForm({
    name: "",
    mobil_number: "",
    email_address: "",
  });

  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const executeRecaptcha = async () => {
    const recaptchaToken = await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY);
    setToken(recaptchaToken);
    return recaptchaToken;
  };

  const submit = async (e) => {
    e.preventDefault();

    const recaptchaToken = await executeRecaptcha();

    if (!recaptchaToken) {
      alert.error("reCAPTCHA token is missing.");
      return;
    }
    await post(route("contact-us-form"), { ...data, recaptchaToken });
    setRefreshReCaptcha(!refreshReCaptcha);
    reset();
  };

  return (
    <>
      <Header />
      <Marquee className="text-lg font-extrabold mt-3 bg-green-100" speed={50}>
        Common Issues in LED/LCD TV TV screen is blank, TV not switched on,
        Automatically TV switched off or on,
        HDMI port issue (depends upon the model we can fix the issue),
        Horizontal line in the centre of the LED TV screen,
        Only horizontal line showing without picture,
        Squashed images in the screen,
        TV does not show picture but only plays the sound,
        LED TV displays picture but not plays sound,
        Backlight issue.
        <span className="pr-12" />
      </Marquee>
      <section>
        <div className="bg-white py-5 lg:py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                <div className='my-auto'>
                  <h2 className="py-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome To<span className='text-violet-800'> Win Service</span></h2>
                  <p>
                    We fix problems in all kinds of TV such as LED, LCD, Plasma, Ultra HD TV, 4K TV we service all brands of TV. After completing the whole repairing and testing work, we handover the television at a convenient time for our client. Our maintenance and minimum guarantee support are included with every work that we do. Our professional experts forte in serving issues like vertical lines display issue, backlight services, and many more is acknowledgeable when it comes to servicing any LED TVs and LCD TVs of your choice.
                  </p>
                </div>
                <div className='flex justify-center items-center'>
                  <img src="/image/tv-repair-image.jpg" className='w-[80%]' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 text-white py-10 sm:py-20">
          <img
            alt=""
            src="/image/tv-image.jpg"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          />
          <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row w-full px-5'>
            <div className='lg:w-[50%] md:w-[50%] w-full flex justify-center'>
              <div className="mx-auto max-w-7xl ">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    LED TV Repair & Service Center in Chennai
                  </h2>
                  <p className="mt-6 text-lg leading-8">
                    We offer our guaranteed & expert Tv services in Chennai. Our trained expert technicians stay current with all changes within the technology industry, we labs are equipped with all kind of latest equipment.
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-[50%] md:w-[50%] sm:w-full flex justify-center lg:mt-0 mt-8'>
              <form className="lg:w-[70%] md:w-[70%] w-full" onSubmit={submit}>
                <h2 className="text-lg font-medium">Contact Us</h2>
                <div className="mt-4">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={data.name}
                      autoComplete="name"
                      onChange={(e) => setData("name", e.target.value)}
                      required
                      className="mt-1 block w-full text-black rounded-xl"
                    />
                    <InputError message={errors.name} className="mt-2" />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="mobile-number" className="block text-sm font-medium">
                    Mobile Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="mobil_number"
                      name="mobil_number"
                      type="number"
                      value={data.mobil_number}
                      autoComplete="mobil_number"
                      onChange={(e) => setData("mobil_number", e.target.value)}
                      required
                      className="mt-1 block w-full text-black rounded-xl"
                    />
                    <InputError message={errors.mobil_number} className="mt-2" />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="email-address" className="block text-sm font-medium">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email_address"
                      name="email_address"
                      type="text"
                      value={data.email_address}
                      autoComplete="email_address"
                      onChange={(e) => setData("email_address", e.target.value)}
                      required
                      className="mt-1 block w-full text-black rounded-xl"
                    />
                    <InputError message={errors.email_address} className="mt-2" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <PrimaryButton className="ms-4" disabled={processing}>
                    Submit
                  </PrimaryButton>
                </div>
                <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
                  <GoogleReCaptcha
                    className="google-recaptcha-custom-class"
                    onVerify={setToken}
                    refreshReCaptcha={refreshReCaptcha}
                  />
                </GoogleReCaptchaProvider>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-green-100 py-10 lg:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="py-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Best LED TV Repair Services in Chennai</h2>
              <p>
                we offer our guaranteed & expert Tv services in Chennai. Our trained expert technicians stay current with all changes within the technology industry, we labs are equipped with all kind of latest equipment.
              </p>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-4">
                <div className='my-auto'>
                  <ul className="list-disc pl-6 space-y-2">
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> LED TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> LCD TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> OLED TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> Plasma TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> 4K TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> Curved TV Repair in Chennai </p>
                    <p className="flex text-base text-gray-700"><img src="/icon/tick-mark.svg" className="w-5 mr-1" alt="Tick mark" /> Android TV Repair in Chennai </p>
                  </ul>
                </div>
                <div className='flex flex-col justify-center items-center bg-white py-6 px-6'>
                  <img src="/icon/tv-icon.svg" className='w-[40%] mb-4' alt="TV Icon" />
                  <h1 className='text-4xl font-extrabold mb-2 text-[#aa374c]'>700</h1>
                  <p className='text-xl font-extrabold text-[#123E84]'>Screen Replacement</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-white py-6 px-6'>
                  <img src="/icon/shop-icon.svg" className='w-[40%] mb-4' alt="TV Icon" />
                  <h1 className='text-4xl font-extrabold mb-2 text-[#aa374c]'>1512</h1>
                  <p className='text-xl font-extrabold text-[#123E84]'>ON Site Repairs</p>
                </div>
                <div className='flex flex-col justify-center items-center bg-white py-6 px-6'>
                  <img src="/icon/smily-face-icon.svg" className='w-[40%] mb-4' alt="TV Icon" />
                  <h1 className='text-4xl font-extrabold mb-2 text-[#aa374c]'>2212</h1>
                  <p className='text-xl font-extrabold text-[#123E84]'>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-950 py-10 lg:py-10">
          <h1 className='text-white text-4xl font-extrabold text-center mb-2'>All Brand LED TV Installation in Chennai</h1>
          <h1 className='text-white text-2xl font-extrabold text-center'>Call Today For A Free Estimate +91-7010737409</h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-3">
              <div className='flex flex-col justify-center items-center py-6 px-6 '>
                <img src="/image/smart-tv.png" height={200} alt="TV Icon" />
                <h1 className='text-2xl text-center font-extrabold py-2'>Smart TV Repair</h1>
                <p className='text-base font-bold'>We are one of the best tv service centers in Chennai, providing you all types of Smart TV Repair Services in Chennai. We have a certified tv technician who gives you the best-in-class tv repair services.</p>
              </div>
              <div className='flex flex-col justify-center items-center py-6 px-6'>
                <img src="/image/led-tv.png" height={200} alt="TV Icon" />
                <h1 className='text-2xl text-center font-extrabold py-2'>LED TV Repair</h1>
                <p className='text-base font-bold'>We excel in LCD Repairs Services in Chennai so you can be assured that you are just at the right place to get your job done and we keep our team updated on the latest technology needs</p>
              </div>
              <div className='flex flex-col justify-center items-center py-6 px-6 '>
                <img src="/image/lcd-tv.png" height={200} alt="TV Icon" />
                <h1 className='text-2xl text-center font-extrabold py-2'>LCD TV Repair</h1>
                <p className='text-base font-bold'>LCD TV repair services in Chennai, We offer our guaranteed & expert services. we labs are equipped with all kinds of the latest equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-10 lg:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="py-4 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">We are specialized in all TV brands</h2>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-4">
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/sony-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/acer-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/oneplus-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/philips-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-4">
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/toshiba-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/lg-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/realme-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/tcl-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-4">
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/xiaomi-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/haier-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-gray-100 rounded-2xl'>
                  <img src="/tv-brand/nokia-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
                <div className='flex flex-col justify-center items-center py-6 px-6 transition-transform duration-300 ease-in-out hover:scale-110 bg-green-100 rounded-2xl'>
                  <img src="/tv-brand/panasonic-logo.svg" width={100} height={100} alt="TV Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fixed right-1 bottom-20 z-40">
          <a href="tel:7010737409">
            <img src="/image/phone.svg" width={50} alt="whats app" />
          </a>
        </div>
        <div className="fixed right-1 bottom-36 z-40">
          <a href="https://wa.link/dti1kz">
            <img src="/image/whatsapp.svg" width={50} alt="whats app" />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
