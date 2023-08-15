'use client'

import Link from "next/link"

const ClientPostRoute = ({
  children, 
  route,
} : {
  children:React.ReactNode, 
  route: string
}) => {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientPostRoute