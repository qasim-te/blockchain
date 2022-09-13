import React from 'react';
import {Route, Routes} from "react-router";
import Main from "../pages/Main";
import Buttons from "../pages/ui-features/Buttons";
import Dropdowns from "../pages/ui-features/Dropdowns";
import Typography from "../pages/ui-features/Typography";
import Charts from "../pages/charts/Charts";
import Login from "../pages/samples/Login";
import Register from "../pages/samples/Register";
import Icons from "../pages/icons/Icons";
import Forms from "../pages/forms/Forms";
import Tables from "../pages/tables/Tables";
import BlankPage from "../pages/samples/BlankPage";
import Error404 from "../pages/samples/Error404";
import Error500 from "../pages/samples/Error500";

function ThemeRoutes(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/dropdowns" element={<Dropdowns />} />
                <Route path="/typography" element={<Typography />} />
                <Route path="/basic_form_elements" element={<Forms />} />
                <Route path="/basic_tables" element={<Tables />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/blank_page" element={<BlankPage />} />
                <Route path="/error404" element={<Error404 />} />
                <Route path="/error500" element={<Error500 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </>
    );
}

export default ThemeRoutes;