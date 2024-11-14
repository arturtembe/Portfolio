import { Link } from "react-router-dom";
import { LinkLiHeaderComponentInterface } from "../../../interfaces/components/header/li/link.li.header.component.interface";

export default function LiLinkComponent({LinkValue, ...props }:LinkLiHeaderComponentInterface){
    return <li>
            <Link {...props}>{LinkValue}</Link>
        </li>
}