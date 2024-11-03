import Image from "next/image";

const LogoBlack = () => {
    return (
        <div className="logo">
            <Image src="/logo-black.svg" alt="Black Logo" fill />
        </div>
    );
}

export {LogoBlack};