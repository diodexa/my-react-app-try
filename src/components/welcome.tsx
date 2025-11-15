import type React from "react";


interface WelcomeProps {
  name: string;
  usia: number;
  job : string;
  children? : React.ReactNode;
}

function Welcome ({name,usia,job} : WelcomeProps )  {
    return <>
    <div style={{display:"flex", flexDirection:"column", border: "1px solid black"}}>
        <h4> Halo aku {name}</h4>
        <h4> Usiaku {usia}</h4>
        <h4> Pekerjaan ku {job}</h4>
    </div>
        </>
}



export default Welcome;

