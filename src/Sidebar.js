import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <h2>programmer</h2>
            <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar__voice">
            <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcons">
                <InfoIcon/>
                <CallIcon/>
            </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png" />
                <div className="sidebar__profileInfo">
                    <h3>@shazali</h3>
                    <p>#ThisisID</p>
                </div>
                <div className="sidebar__profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
