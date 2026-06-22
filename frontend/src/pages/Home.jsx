import { useState , useRef } from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";

function Home(){
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const myRef = useRef(null);
    const navigate = useNavigate();

    async function handleupload(e){
        e.preventDefault();

        if(!file){
            setMessage("Please Select File");
            setIsSuccess(false);
            return;
        }

        const formData = new FormData();
        formData.append("dataset", file);
        
        try{
            const response = await fetch(
                    "https://smart-dataset-analyzer-v2.onrender.com/upload",
                {
                    method: "POST",
                    body: formData
                }
            
            );
            const data = await response.json(); 

            setMessage(data.message);
            setIsSuccess(true)
        }catch(error){
            setMessage("Upload Failed");
            setIsSuccess(false);
        }
        
    };

    function handlefile(e){
        setFile(e.target.files[0]);
    };

    function handleClear(){
        setFile(null);
        setMessage("");
        setIsSuccess(false);

        if(myRef.current){
            myRef.current.value = "";
        }
    };

    return (
        <div className="box">
            <h1 className="heading mb-4">Upload Dataset</h1>
            <form onSubmit={handleupload}>
                <input 
                ref={myRef}
                type="file"
                onChange={handlefile}
                className="mb-4 border border-1 p-2"
                />
                <button 
                type="button" 
                onClick={handleClear}
                className="red-btn">
                    Clear
                </button><br></br>
                <button 
                type="submit"
                className="green-btn mb-4">
                    Upload
                </button>
            </form>
            {message && (
                <>
                <h1 className={`heading ${isSuccess ? "text-green-500" : "text-red-500"}`}>{message}</h1>

                {isSuccess && (
                    <button onClick={() => navigate("/information")}
                    className="green-btn mt-2 mb-4">
                        Next
                    </button>
                )}
                </>
            )}
        </div>
    )

}
export default Home;