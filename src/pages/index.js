// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
//import Gallery from './components/gallery'
//import Profile from './qcomps/profile_mistake'
import FirstComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Pro from './components/profile_props'
import Gall from './qcomps/gallery_props'
import Sq from './components/square'
import Item from './qcomps/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gall />
    </div>
  )
}
