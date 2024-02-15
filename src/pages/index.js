// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from './qcomps/list_keys_id'
import Recipe from './qcomps/recipes'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
import Form from './qcomps/stuckForm'
import Thing from './components/snapshot2'
import Queue from './components/queueUpdates'
import Shop from './qcomps/shoppingCart'

export default function Home() {
  return (
    <div className={styles.main}>
        <Shop />
    </div>
  )
}
