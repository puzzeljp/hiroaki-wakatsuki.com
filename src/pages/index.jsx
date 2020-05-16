import React from "react"
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
          <a href="https://puzzel.jp">puzzel.jp</a>
        </li>
        <li>
          Twitter:
          <a href="https://twitter.com/puzzeljp">@puzzeljp</a>
        </li>
      </ul>
    </Container>
    </>
  )
}
