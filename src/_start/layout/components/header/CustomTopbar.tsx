import React, { useState } from "react";
import { KTSVG } from "../../../helpers";
import { useTheme } from "../../core";

export function CustomTopbar() {
    const { config } = useTheme();
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showInboxComposeModal, setShowInboxComposeModal] = useState(false);

    return (
        <>
            {/* begin::Search */}
            <div className="top-search-bar-div">
                <input placeholder="search..." />
                <KTSVG
                    path="/media/icons/duotone/General/Search.svg"
                    className="svg-icon-1 svg-icon-light search-icon"
                />
            </div>
            {/* end::Search */}

            <select className="top-select-box">
                <option>This Year</option>
                <option>Last Year</option>
            </select>

            <button className="top-nav-btn">
                <KTSVG
                    path="/media/icons/duotone/General/Notifications1.svg"
                    className="svg-icon-1 notification-icon"
                />
            </button>

            <button className="top-nav-btn">
                <img
                    src="/media/icons/duotone/General/us.svg"
                    className="flag-icon"
                />
            </button>

            <button className="top-nav-btn-round">
               
            </button>
        </>
    );
}
