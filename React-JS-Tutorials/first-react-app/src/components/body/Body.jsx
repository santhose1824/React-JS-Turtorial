import "./Body.css";

const Body = () =>{
    return (
        <div style={{
            textAlign: "center",
            marginTop:50
        }}>
            <p>
              <b>Santhose H.M</b>
           </p>
           <p>
              <b>santhosehm@gmail.com</b>
           </p>
           <p>
              <b>Sivakasi,Virudhunagar,Tamil Nadu,India</b>
           </p>
           <p>
              <b>Full Stack Software Developer</b>
           </p>
           <div className="button">
            <button className="cancel">Cancel</button>
            <button className="approve">Approve</button>
           </div>
        </div>
    );
}


export default Body;