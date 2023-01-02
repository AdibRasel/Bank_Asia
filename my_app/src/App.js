import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Ac_details_print from './Page/Ac_details_print/Ac_details_print';
import AC_Print from './Page/AC_Print/AC_Print';



class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<Home />} />

                        {/* test  */}
                        <Route path="/ac_print" element={<Ac_details_print />} />
                        <Route path="/Ac_Print_Test" element={<AC_Print />} />

                    </Routes>
                </BrowserRouter>
        );
    }
}

export default App;
