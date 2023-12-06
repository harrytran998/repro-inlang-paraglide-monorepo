import * as m from "../locales/paraglide/messages.js"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>${m.greeting({ name: "John Doe" })}</h1>
    <h1>${m.helloWorld()}</h1>
  </div>
`
