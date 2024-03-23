import Link from "next/link"

export default function Product() {
    return <div>
        <h1>Product list</h1>
        <ul>
            <Link href={"/product/1"}>
                Product 1
            </Link>
            <hr/>
            <Link href={"/product/2"}>
                Product 2
            </Link>
            <hr/>
            <Link href={"/product/3"}>
                Product 3
            </Link>
            <hr/>
        </ul>
    </div>
  }
  