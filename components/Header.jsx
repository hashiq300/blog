import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href="/">
                    <a style={{ fontSize: "1.5rem" }}>My Blog</a>
                </Link>
            </div>
        </header>
    );
}
