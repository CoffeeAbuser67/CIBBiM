import CIBBiM_BG from "../../assets/bg_cropped2.svg";


// ★ Home ✦─────────────────➤
const Home = () => {


  // bora funfou aqui!

  // ── ✦─DOM─➤
  return (
    <div id="home_canvas" className="relative w-full h-screen">
      
      <div
        // _PIN_ CIBBiM_BG
        id="CIBBiM_BG"
        className="absolute w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${CIBBiM_BG})` }}
      />


      <div className="relative">
        <h1 className = "text-4xl text-black"> tEstING 🦀</h1>
      </div>


    </div>
  );
}; //★ Home ✦─────────────────➤

export default Home;
