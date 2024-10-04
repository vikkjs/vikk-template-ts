import typescriptLogo from '/typescript.svg';
import vikkLogo from '/vikk.png';
import viteLogo from '/vite.svg';

export function App() {
    return <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={typescriptLogo} class="logo logots" alt="TypeScript logo" />
        </a>
        <a href="https://github.com/vikkjs/vikk" target="_blank">
            <img src={vikkLogo} class="logo logovikk" alt="Vikk logo" />
        </a>
        <h1>Vite + TypeScript + Vikk</h1>
        <p class="read-the-docs">
            Click on the Vite, TypeScript and Vikk logos to learn more
        </p>
    </div>
}

document.body.append(<App />)