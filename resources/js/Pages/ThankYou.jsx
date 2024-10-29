import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
import { Link } from "@inertiajs/react";

export default function ThankYou() {
    return (
        <>
            <Header />
            <div className="py-8 lg:py-10 px-6 flex flex-col justify-center">
                <img
                    src="/image/thanks-image.png"
                    alt="Thank You"
                    width={400}
                    className="mx-auto"
                />
                <h1 className="text-black text-4xl font-extrabold text-center mb-2">
                    Thank You!
                </h1>
                <h1 className="text-black text-2xl font-extrabold text-center mb-5">
                    We will reach you soon
                </h1>
                <Link className="bg-[#123E84] py-1 px-2 mx-auto rounded-lg" href="/" >
                    <h1 className="text-white text-xl font-extrabold text-center">
                        Return To Home
                    </h1>
                </Link>
            </div>
            <Footer />
        </>
    );
}
