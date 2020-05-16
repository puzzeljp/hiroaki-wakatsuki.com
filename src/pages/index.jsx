import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import Head from '../components/head'

export default function About() {
  return (
    <>
    <Head/>
    <Container>
      <h1>Hiroaki WAKATSUKI<small className="block text-gray-400 text-sm">hiroaki-wakatsuki.com</small></h1>
      <h2 className="mt-10 mb-5">Links</h2>
      <ul>
        <li>
          Portfolio: 
          <Link to="https://puzzel.jp">puzzel.jp</Link>
        </li>
        <li>
          Twitter:
          <Link to="https://twitter.com/puzzeljp">@puzzeljp</Link>
        </li>
      </ul>
    </Container>
    </>
  )
}
