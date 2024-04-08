
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
Home.getInitialProps = async ({ req }) => {
  // Get the current pathname from the request object
  const { pathname } = req.url;

  // Extract the city from the pathname
  const city = pathname.substring(1); // Remove the leading '/' character

  // Return the city as props
  return { city };
};
export default function Home({city}) {
const router = useRouter()
if(city){
  router.push("/"+ city)

}else{
  router.push("/mumbai")
}
 
  return (
    <>
    </>
  );
}
