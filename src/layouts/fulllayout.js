import React from 'react';
import Sidebar from '../layouts/layout-components/sidebar';
import Navbar from '../layouts/layout-components/navbar';
import Footer from '../layouts/layout-components/footer';

class FullLayout extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <footer />
                    </div>
                </div>
            </div>
        )
    }
}
export default FullLayout;
