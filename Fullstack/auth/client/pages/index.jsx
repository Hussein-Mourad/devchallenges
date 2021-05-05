import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import {useEffect} from 'react';

export default function index() {
  useEffect(async()=>{
    const res = await fetch("/auth/");
    const isAuth = await res.json();
    console.log(isAuth)
  },[])
  return (
    <>
      <NavBar /> 
      <div className="mx-auto mt-8 flex flex-col items-center justify-center text-gray-800 dark:text-gray-100 max-w-3xl">
        <h1 className="text-3xl">Personal info</h1>
        <p className="mt-2 dark:text-gray-200">
          Basic info, like your name and photo
        </p>
        <Profile />
        <Footer className="flex mt-2" />
      </div>
    </>
  );
}
