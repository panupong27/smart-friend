import Link from 'next/link'
/* import { FaHome } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai"; */

const Nav = props=>{
    return(
        <div>
            <ul>
                <li>
                    <Link href="/home">
                        <a>
                            <img src="/home.JPG" alt="" className="img"/><br/>
                            หน้าหลัก
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/find-friend">
                        <a>
                            <img src="/frind.JPG" alt="" className="img"/><br/>
                            หาเพื่อน
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/menu">
                        <a>
                            <img src="/menu.JPG" alt="" className="img"/><br/>
                            เมนู
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/account">
                        <a>
                            <img src="/system.JPG" alt="" className="img"/><br/>   
                            ระบบสมาชิก
                        </a>
                    </Link>
                </li>
            </ul>
            
            <style jsx>{`
                ul{
                    width: 100%;
                    bottom: 0;
                    margin: 0;
                    padding: 0;
                    position: fixed;
                    background: white;
                    z-index: 9999;
                }
                ul li{
                    display: block;
                    list-style: none;
                    float: left;
                    width: 25%;
                    padding: 0;
                    text-align: center;
                    position: relative;
                    top: 3.5px;
                }
                ul li a{
                    display: block;
                    font-size: 12px;
                    color: black;
                    text-decoration: none;
                    padding: 6px 0;
                    
                }
                .img{
                    width: 22px;
                    height: 20px;
                }
            `}</style>
        </div>
    );
}

export default Nav