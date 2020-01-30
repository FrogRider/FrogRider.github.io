import React, { useState } from "react";

import generator from "./components/generatorClass";
import Switcher from "./components/switcher";
import Length from "./components/length";

import './style/main.scss'

function App() {
  const [lower, setLower] = useState(false);
  const [uper, setUper] = useState(false);
  const [symb, setSymb] = useState(false);
  const [num, setNum] = useState(false);
  const [length, setLength] = useState("20");
  const updateLower = () => setLower(!lower);
  const updateUper = () => setUper(!uper);
  const updateSymb = () => setSymb(!symb);
  const updateNum = () => setNum(!num);
  const updateLength = l => setLength(l);
  const newPwd = new generator(length, lower, uper, symb, num);
  const [pwd, setPwd] = useState("Your password");

  return (
    <div className="wrapper">
      <p className="output">{pwd}</p>
      <button onClick={() => setPwd(newPwd.generate)}>Generate</button>
      <Switcher update={updateLower} id={"l"} label={"Lower"} />
      <Switcher update={updateUper} id={"u"} label={"Uper"} />
      <Switcher update={updateSymb} id={"s"} label={"Symbol"} />
      <Switcher update={updateNum} id={"n"} label={"Number"} />
      <Length update={updateLength} />
    </div>
  );
}

export default App;
