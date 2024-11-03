import Image from "next/image";
import styles from "./icon.module.css"
const HamburgerIcon = () => {
    return (
        <div className={styles["icon-40"]}>
            <Image src="/hamburger-icon.svg" alt="Hamburger Icon" fill />
        </div>
    );
}

const SearchIcon = () => {
    return (
        <div className={styles["icon-24-abs"]}>
            <Image src="/search-icon.svg" alt="Search Icon" fill />
        </div>
    );
}

const HeartIcon = () => {
    return (
        <div className={styles["icon-32"]}>
            <Image src="/heart-icon.svg" alt="Heart Icon" fill />
        </div>
    );
}

const CartIcon = () => {
    return (
        <div className={styles["icon-32"]}>
            <Image src="/cart-icon.svg" alt="Cart Icon" fill />
        </div>
    );
}

const PersonIcon = () => {
    return (
        <div className={styles["icon-32"]}>
            <Image src="/person-icon.svg" alt="Person Icon" fill />
        </div>
    );
}

const PhoneIcon = () => {
    return (
        <div className={styles["icon-24"]}>
            <Image src="/phone-icon.svg" alt="Phone Icon" fill />
        </div>
    );
}

const ComputerIcon = () => {
    return (
        <div className={styles["icon-24"]}>
            <Image src="/computer-icon.svg" alt="Computer Icon" fill />
        </div>
    );
}

const GameIcon = () => {
    return (
        <div className={styles["icon-24"]}>
            <Image src="/game-icon.svg" alt="Game Icon" fill />
        </div>
    );
}

const CameraIcon = () => {
    return (
        <div className={styles["icon-24"]}>
            <Image src="/camera-icon.svg" alt="Camera Icon" fill />
        </div>
    );
}

const HeadPhoneIcon = () => {
    return (
        <div className={styles["icon-24"]}>
            <Image src="/headphone-icon.svg" alt="HeadPhone Icon" fill />
        </div>
    );
}

const SeparatorIcon = () => {
    return (
        <div className={styles["separator"]}>
            <Image src="/separator.svg" alt="Separator" fill />
        </div>
    )
}

export { HamburgerIcon, SearchIcon, HeartIcon, CartIcon, PersonIcon, CameraIcon, ComputerIcon, GameIcon, HeadPhoneIcon, SeparatorIcon, PhoneIcon };