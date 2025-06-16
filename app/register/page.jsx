
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 flex flex-col justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Section: Image */}
          <div className="hidden md:flex items-center justify-center p-8">
          <div className="text-center">
            {/* <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Welcome Back!
            </h2> */}
            <p className="mt-4 text-white/80 max-w-xs mx-auto">
              Register to your account and continue your developer journey with us.
            </p>
          </div>
        </div>

          {/* Right Section: Form */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full">
              <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Register
              </h1>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}