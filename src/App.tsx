import { useState } from 'react'
import { invoke } from '@tauri-apps/api/core'
import reactLogo from './assets/react.svg'

const resources = [
  {
    name: 'VITE',
    href: 'https://vite.dev',
    logo: '/vite.svg',
    color: 'bg-violet-400',
  },
  {
    name: 'TAURI',
    href: 'https://tauri.app',
    logo: '/tauri.svg',
    color: 'bg-amber-300',
  },
  {
    name: 'REACT',
    href: 'https://react.dev',
    logo: reactLogo,
    color: 'bg-cyan-300',
  },
]

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  async function greet() {
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <div className="min-h-screen bg-amber-50 p-4 sm:p-8">
      <main className="mx-auto max-w-4xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-2 inline-block border-4 border-black bg-black px-3 py-1">
              <span className="text-xs font-black uppercase tracking-widest text-white">
                Tauri Desktop
              </span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">
              TLDR
              <br />
              Workspace
            </h1>
            <p className="mt-3 max-w-md text-lg font-medium text-black">
              Tailwind is wired up. Call Tauri commands. Ship fast.
            </p>
          </div>
          <div className="border-4 border-black bg-lime-300 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-sm font-black uppercase text-black">
              ● Live
            </span>
          </div>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          {resources.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`group border-4 border-black ${item.color} p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="flex items-center gap-4">
                <div className="border-4 border-black bg-white p-2">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-10 w-10"
                  />
                </div>
                <div>
                  <p className="text-xl font-black uppercase text-black">
                    {item.name}
                  </p>
                  <p className="text-sm font-bold text-black/70">Docs →</p>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black uppercase text-black">
                Greet Command
              </h2>
              <p className="mt-1 font-medium text-black/70">
                Call your Rust backend directly.
              </p>
            </div>
            <div className="flex items-center gap-2 border-4 border-black bg-emerald-400 px-3 py-1">
              <span className="h-3 w-3 border-2 border-black bg-black" />
              <span className="text-sm font-black uppercase text-black">
                Connected
              </span>
            </div>
          </div>

          <form
            className="mt-6 flex flex-col gap-4 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              greet()
            }}
          >
            <label className="sr-only" htmlFor="greet-input">
              Name to greet
            </label>
            <input
              id="greet-input"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="ENTER A NAME..."
              className="w-full border-4 border-black bg-amber-50 px-4 py-3 text-lg font-bold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-black/20"
            />
            <button
              type="submit"
              className="border-4 border-black bg-rose-400 px-6 py-3 text-lg font-black uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Send →
            </button>
          </form>

          {greetMsg && (
            <div className="mt-6 border-4 border-black bg-cyan-300 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-lg font-black text-black">{greetMsg}</p>
            </div>
          )}
        </section>

        <footer className="mt-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-black/50">
            Built with brutalist love
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
