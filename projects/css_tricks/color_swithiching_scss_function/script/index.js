for (let i = 0; i < 16; i++) {
  let node = document.createElement("div")
  node.appendChild(document.createTextNode(i + 1))
  node.classList.add('photo', `no-photo-${i % 16}`)
  document.getElementById("box").appendChild(node)
}
