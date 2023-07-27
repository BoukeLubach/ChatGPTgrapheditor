import React, { useEffect, useMemo, useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBars, FaChartArea, FaBezierCurve, FaInfo, FaBookOpen, FaListOl, FaFlask, FaWindowClose, FaPlusSquare, FaUserCog } from "react-icons/fa";

import '../../assets/scss/sidebar/custom.scss'
import '../../assets/scss/sidebar/sidebar-style.css'


function SidebarResponsive(props) {

    const [screenwidth, setScreenwidth] = useState(window.innerWidth);
    const [forceOpen, setForceOpen] = useState(false)


    const updateDimensions = () => {
        setScreenwidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


    const collapsed = useMemo(() => {
        let shouldcollapse = false

        if (forceOpen) {
            shouldcollapse = false
        } else if (screenwidth < 800) {
            shouldcollapse = true
        }

        return shouldcollapse

    }, [screenwidth, forceOpen])


    const activefield = props.location.pathname.split('/')[1].toLowerCase() //get url location (plant,companies, projects etc.)


    return (

        <div className="">
            <aside>
                <div class="flex h-screen">
                    <div class="w-1/4 ">
                        <ProSidebar collapsed={collapsed} >
                            <div className="sidebar-logo">
                                <img src="/assets/img/Logo_transparant.png" alt='' style={{ "width": "80%" }} />
                            </div>
                            <Menu iconShape="square">
                                {screenwidth < 800 ? <MenuItem icon={forceOpen ? <FaWindowClose /> : <FaBars />} onClick={() => setForceOpen(!forceOpen)}>Collapse</MenuItem> : <></>}




                                {/* graph menu item */}
                                <MenuItem icon={<FaUserCog />} active={activefield === "graph" ? true : false} >
                                    <a href="/graph" className="">Graph</a>
                                </MenuItem>

                                {/* chat menu item */}
                                <MenuItem icon={<FaUserCog />} active={activefield === "chat" ? true : false} >
                                    <a href="/chat" className="">Chat</a>
                                </MenuItem>



                            </Menu>

                        </ProSidebar>

                    </div>
                    <div class="flex-1 bg-white">
                        {props.children}
                    </div>
                </div>
                {/* <footer className="text-center">

            </footer> */}
            </aside >
        </div >

    )
}

export default SidebarResponsive