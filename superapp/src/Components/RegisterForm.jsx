import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    registerbox: null,
  });
  const navigate = useNavigate()
  const handleSubmit = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      setErrors((prev) => {
        return { ...prev, name: "Name is required" };
      });
      isError = true;
    } else {
      setErrors((prev) => {
        return { ...prev, name: null };
      });
    }
      if (formValues.username.trim().length === 0) {
        setErrors((prev) => {
          return { ...prev, username: "Username is required" };
        });
        isError=true;
      } else {
        setErrors((prev) => {
          return { ...prev, username: null };
        });
      }
       if (formValues.email.trim().length === 0) {
         setErrors((prev) => {
           return { ...prev, email: "Email is required" };
         });
         isError=true;
       } else {
         setErrors((prev) => {
           return { ...prev, email: null };
         });
       }
       if (formValues.mobile.trim().length === 0) {
         setErrors((prev) => {
           return { ...prev, mobile: "Mobile is required" };
         });
         isError=true;
       } else {
         setErrors((prev) => {
           return { ...prev, mobile: null };
         });
       }
       if(formValues.registerbox=== false){
        setErrors((prev)=>{return{...prev, registerbox:"please Check the box"}})
       isError = true;
    } 
       else{
        setErrors((prev)=>{return{...prev,registerbox:null}})
       }

       if(isError){
        return;
       }else{
        window.localStorage.setItem("userInfo", JSON.stringify(formValues))
        navigate('/info')
       }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        value={formValues.name}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
        type="text"
        placeholder="Name"
      />
      <p>{errors.name}</p>
      <br />
      <input
        value={formValues.username}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, username: e.target.value };
          });
        }}
        type="text"
        placeholder="Username"
      />
      <p>{errors.username}</p>
      <br />
      <input
        value={formValues.email}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
        type="text"
        placeholder="Email"
      />
      <p>{errors.email}</p>
      <br />

      <input
        value={formValues.mobile}
        onChange={(e) => {
          setFormValues((prev) => {
            return { ...prev, mobile: e.target.value };
          });
        }}
        valuetype="text"
        placeholder="Mobile"
      />
      <p>{errors.mobile}</p>
      <br />
      <label htmlFor="registerbox">
        <input
          checked={formValues.registerbox}
          id="registerbox"
          type="checkbox"
          name="registerbox"
          onChange={(e) => {
            setFormValues((prev) => {
              return { ...prev, registerbox: e.target.checked };
            });
          }}
        />
        Share my registration data with Superapp
      </label>
      <p>{errors.registerbox}</p>
      <button
        onClick={handleSubmit}
        style={{ border: "none", padding: "6px", background: "green" }}
        type="button"
      >
        Sign up
      </button>
    </div>
  );
}
