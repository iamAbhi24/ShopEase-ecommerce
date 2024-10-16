import React, { useReducer, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

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

  const [submit, setSubmit] = useState(false); //For send question button
  const [isLoading, setIsLoading] = useState(false); // For loader, when we click send question button
  const [checked, setChecked] = useState(false); // For success alert snackbar when email gets successfully sent
  const [error, setError] = useState(false); // For error alert snackbar when  error occured while sending email
  // Before submitting the form we are checking all the inputs are valid or not.
  const handleSubmit = (e) => {
    e.preventDefault(); //stoping the form to get submitted
    if (formValidation()) {
      const emailParams = {
        subject: "Concern",
        name: state.name,
        message: state.message,
        email: state.email,
      };
      // service_uy5112s is service key, contact_form is emailJs template name, emailParams is all parameters
      emailjs
        .send("service_uy5112s", "contact_form", emailParams, {
          publicKey: "ZTlmKDsuZ4Q7d4b3s",
        })
        .then((response) => {
          setChecked(true); //email successfuly sent and success alert will get visible
        })
        .catch((error) => {
          setError(true); // error occured while sending email and error alert will get visible
        })
        .finally(() => {
          dispatch({ type: "reset" }); // reset all input filed to empty
          setSubmit(false);
          setIsLoading(false);
          // both alert snacbar will get disappear after 2 seconds
          setTimeout(() => {
            setChecked(false);
            setError(false);
          }, 2000);
        });
    }
  };
  //Validating the form
  const formValidation = () => {
    if (
      !state.name ||
      !state.email ||
      !state.message ||
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(state.email.toLowerCase())
    ) {
      setSubmit(true);
      setIsLoading(false);
      return false;
    } else return true;
  };

  // The reducer method used to handle states of three input element name, email and message.
  const stateReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "message":
        return { ...state, message: action.payload };
      case "reset":
        return initialvalue;
      default:
        return state;
    }
  };
  // will hold input object
  const [state, dispatch] = useReducer(stateReducer, initialvalue);   

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            To better assist you, contact us by providing the necessary
            information below. Then, tap or click "Send Question" to contact us.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    autoComplete="off" //autosuggession is off
                    fullWidth
                    onChange={(e) => {
                      dispatch({ type: "name", payload: e.target.value });
                    }}
                    value={state.name}
                    placeholder="John markrem"
                    error={!state.name && submit && submit} //this prop will be true if name  field kept empty and we have hit the sned question btn
                    helperText={!state.name && submit ? "Enter Name" : ""} //this text will be visible when we  hit the sned question btn and  the field is empty
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    autoComplete="off"
                    fullWidth
                    onChange={(e) => {
                      dispatch({ type: "email", payload: e.target.value });
                    }}
                    value={state.email}
                    placeholder="John@gmail.com"
                    error={
                      // It will get true when either email field is empty or the input is not matching with this specified pattern
                      !state.email && submit
                        ? true
                        : !/^[a-z].*@gmail\.com$/.test(
                            state.email.toLowerCase()
                          ) && submit
                        ? true
                        : false
                    }
                    helperText={
                      // It will get visible when either email field is empty or the input is not matching with this specified pattern
                      !state.email && submit
                        ? "Enter Email"
                        : !/^[a-z].*@gmail\.com$/.test(
                            state.email.toLowerCase()
                          ) && submit
                        ? "Invalid Email"
                        : ""
                    }
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
                    error={!state.message && submit && submit} //this prop will be true if name  field kept empty and we have hit the sned question btn
                    helperText={!state.message && submit ? "Enter Message" : ""} //this text will be visible when we  hit the sned question btn and  the field is empty
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-slate-900	 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg"
                  onClick={() => {
                    setIsLoading(true);
                  }}
                >
                  Send Question
                </button>
                {isLoading && <CircularProgress color="inherit" />}
                {/* below snackbar for success alert */}
                <Snackbar
                  open={checked}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Email successfully sent!
                  </Alert>
                </Snackbar>
                {/* below snacbar for error alert */}
                <Snackbar
                  open={error}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Error, please try again later
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
