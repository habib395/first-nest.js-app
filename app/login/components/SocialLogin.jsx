// "use client";
// import { FaGithub } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa";
// import {  signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { useEffect } from "react";
// export default function SocialLogin() {
//   const router = useRouter();
//   const session = useSession();

//   const handleSocialLogin = (providerName) => {
//     signIn(providerName);
//   };

//   useEffect(() => {
//     if (session?.status == "authenticated") {
//       router.push("/");
//       toast("Successfully Logged IN");
//     }
//   }, [session?.status]);

//   return (
//     <div className="flex justify-center gap-8">
//       <p
//         onClick={() => handleSocialLogin("google")}
//         className="bg-slate-200 rounded-full p-3"
//       >
//         <FaGoogle type="button" />
//       </p>
//       <p
//         onClick={() => handleSocialLogin("github")}
//         className="bg-slate-200 rounded-full p-3"
//       >
//         <FaGithub type="button" />
//       </p>
//     </div>
//   );
// }


"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function SocialLogin() {
  const router = useRouter();
  const { status } = useSession();
  const [loadingProvider, setLoadingProvider] = useState(null);

  const handleSocialLogin = async (provider) => {
    setLoadingProvider(provider);
    try {
      await signIn(provider);
    } catch (error) {
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Successfully Logged In");
      router.push("/");
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <button
        onClick={() => handleSocialLogin("google")}
        disabled={loadingProvider === "google"}
        className="flex items-center justify-center gap-3 border border-gray-300 rounded-md px-4 py-2 shadow hover:bg-gray-900 transition text-sm font-medium"
      >
        <FaGoogle className="text-red-500 text-lg" />
        {loadingProvider === "google" ? "Signing in..." : "Continue with Google"}
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        disabled={loadingProvider === "github"}
        className="flex items-center justify-center gap-3 bg-black  rounded-md px-4 py-2 shadow hover:bg-gray-900 transition text-sm font-medium"
      >
        <FaGithub className="text-white text-lg" />
        {loadingProvider === "github" ? "Signing in..." : "Continue with GitHub"}
      </button>
    </div>
  );
}