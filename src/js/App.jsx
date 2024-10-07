import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'


export function App() {
    return <div>
        <a href="https://github.com/vikkjs/vikk" target="_blank">
            <img src={vikkLogo} class="logo logovikk" alt="Vikk logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src={javascriptLogo} class="logo logojs" alt="JavaScript logo" />
        </a>
        <h1>Vikk + Vite + JavaScript</h1>
        <p class="read-the-docs">
            Click on the Vikk, Vite and JavaScript logos to learn more
        </p>
    </div>
}

document.body.append(<App />)
