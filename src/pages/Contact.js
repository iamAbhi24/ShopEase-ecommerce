import React, { useReducer, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div>
      <NavBar />
      <Detail />
      <Footer />
    </div>
  );
}

export default Contact;

//below component will contain name, email, and message of the sender.
export function Detail() {
  // Initially all input elements of the below form are empty
  const initialvalue = {
    name: "",
    email: "",
    message: "",
  };

  const [submit, setSubmit] = useState(false);
  const handleSubmit=(e)=>{
    if(!formValidation()){
      e.preventDefault();
    }
  }
  const formValidation = () => {
    if ((!state.name || !state.email || !state.message)||(!(/^[a-z].*@gmail\.com$/.test(state.email.toLowerCase())))) {
      setSubmit(true);
      return false;
    }
    else
    return true;
  };
  // Initial state for all error will be false for validation
  // const initialErrorValue = {
  //   nameMissing: false,
  //   emailMissing: false,
  //   messageMissing: false,
  //   allMissing: false, // for all input field are missing
  //   emailInvalid: false,
  // };

  // The reducer method used to handle states of three input element name, email and message.
  const stateReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "message":
        return { ...state, message: action.payload };
      default:
        return state;
    }
  };
  // Below Reducer function is getting use for seeting state for error input filed in Validation
  // const errorStateReducer = (errorState, action) => {
  //   switch (action.type) {
  //     case "nameMissing":
  //       return { ...errorState, nameMissing: action.payload };
  //     case "emailMissing":
  //       return { ...errorState, emailMissing: action.payload };
  //     case "messageMissing":
  //       return { ...errorState, messageMissing: action.payload };
  //     case "allMissing":
  //       return { ...errorState, allMissing: action.payload };
  //     case "emailInvalid":
  //       return { ...errorState, emailInvalid: action.payload };
  //     default:
  //       return errorState;
  //   }
  // };
  const [state, dispatch] = useReducer(stateReducer, initialvalue);
  // following uereducer hook is gettting used for storing error state for different input field to implement validation
  // const [errorState, dispatchValidation] = useReducer(
  //   errorStateReducer,
  //   initialErrorValue
  // );

  // Before submitting the form we are checking all the inputs are valid or not.
  // const formValidation = (e) => {
  //   e.preventDefault();
  //   if (!state.name && !state.email && !state.message) {
  //     dispatchValidation({ type: "allMissing", payload: true });
  //   } else if (!state.name || !state.email || !state.message) {
  //     if (!state.name) {
  //       dispatchValidation({ type: "nameMissing", payload: true });
  //     } else if (!state.email) {
  //       dispatchValidation({ type: "emailMissing", payload: true });
  //     } else {
  //       dispatchValidation({ type: "messageMissing", payload: true });
  //     }
  //   } else if (!state.email.endsWith("@gmail.com")) {
  //     dispatchValidation({ type: "emailInvalid", payload: true });
  //   }
  // };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            To better assist you, contact us by providing the necessary
            information below. Then, tap or click "Send Question" to contact us.
          </p>
        </div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      dispatch({ type: "name", payload: e.target.value });
                    }}
                    value={state.name}
                    placeholder="John markrem"
                    error={(!state.name && submit) && submit}
                    helperText={(!state.name && submit)?"Enter Name":""}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <TextField
                    id="outlined-basic"
                    label={"Email"}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      dispatch({ type: "email", payload: e.target.value });
                    }}
                    value={state.email}
                    placeholder="John@gmail.com"
                    error={(!state.email && submit) ? true:((state.email && submit)?true:"")}
                    helperText={(!state.email && submit)?"Enter Email":((state.email && submit) ? "Invalid Email":"")}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <TextField
                    id="outlined-basic"
                    label="message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(e) => {
                      dispatch({ type: "message", payload: e.target.value });
                    }}
                    value={state.message}
                    placeholder="Enter our concern here."
                    error={(!state.message && submit) && submit}
                    helperText={(!state.message && submit)?"Enter Message":""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-slate-900	 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg"
                  // onClick={(e)=>formValidation(e)}
                >
                  Send Question
                </button>
              </div>
              {/* <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">example@email.com</a>
          <p class="leading-normal my-5">49 Smith St.
            <br/>Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
