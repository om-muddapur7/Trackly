import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

const Issues = () => {
    return(
        <>
            <Navbar/>

            <Footer/>
        </>
    )
}

export default Issues;