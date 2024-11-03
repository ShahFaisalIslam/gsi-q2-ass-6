import styles from "./header.module.css"
import { CameraIcon, CartIcon, GameIcon, HamburgerIcon, HeadPhoneIcon, HeartIcon, PersonIcon, PhoneIcon, SearchIcon, SeparatorIcon } from "./icons";
import { LogoBlack } from "./logo";

const HeaderSearchBox = () => {
    return (
        <div className={styles["header-searchbox"]}>
            <input type="text" className={styles["header-searchbox-input"]} placeholder="Search" />
            <SearchIcon />
        </div>
    );
}

const HeaderList = () => {
    return (
        <ul className={styles["header-list"]}>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
        </ul>
    );
}

const HeaderIconList = () => {
    return (
        <div className={styles["header-icons-list"]}>
            <HeartIcon />
            <CartIcon />
            <PersonIcon />
        </div>
    );
}

const Hamburger = () => {
    return (
        <div className={styles["hamburger-icon"]}>
            <HamburgerIcon />
        </div>

    );
}

const SubNav = () => {
    return (
        <div className={styles["subnav"]}>
                <SeparatorIcon />
            <div className={styles["subnav-element"]}>
                <PhoneIcon />
                <p>Phones</p>
            </div>
                <SeparatorIcon />
            <div className={styles["subnav-element"]}>
                <GameIcon />
                <p>Smart Watches</p>
                <SeparatorIcon />
            </div>
            <div className={styles["subnav-element"]}>
                <CameraIcon />
                <p>Cameras</p>
            </div>
                <SeparatorIcon />
            <div className={styles["subnav-element"]}>
                <HeadPhoneIcon />
                <p>Headphones</p>
            </div>
                <SeparatorIcon />
            <div className={styles["subnav-element"]}>
                <GameIcon />
                <p>Gaming</p>
            </div>
                <SeparatorIcon />
        </div>
    );
}

export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <div className={styles["header"]}>
                <LogoBlack />
                <HeaderSearchBox />
                <HeaderList />
                <HeaderIconList />
                <Hamburger />
            </div>
            <SubNav />
        </div>
    );
}