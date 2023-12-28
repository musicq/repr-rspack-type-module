import React from 'react'
import ReactDOM from 'react-dom/client'
import {Future, timers} from 'flowp'

class CountDownLatch {
  private done = new Future<void>()
  constructor(public count: number) {}
  async countDown() {
    this.count--
    if (this.count === 0) this.done.resolve()
  }
  async wait() {
    await this.done
  }
}

const latch = new CountDownLatch(5)
const task = async (i: number) => {
  console.log(`task ${i} started`)
  await timers.sleep(i * 1000)
  console.log(`task ${i} partially finished`)
  latch.countDown()
  await timers.sleep(i * 1000)
  console.log(`task ${i} finished`)
}
const tasks = Array.from({length: 5}, (_, i) => task(i))
latch.wait().then(() => console.log('latch done'))
Promise.all(tasks).then(() => console.log('all done'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Rspack</h1>
  </React.StrictMode>
)
