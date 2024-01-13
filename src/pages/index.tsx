import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
    <h1 className="mt-5 flex justify-center items-center">
      <img src="images/Rail Logo.png" alt="Welk Railway" />
    </h1>
    <DynamicMap/>
    </div>
  )
}
