import Link from "next/link"
const Index = () => {
  return (
    <>
      <div className="nav">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>

  )
}

export default Index