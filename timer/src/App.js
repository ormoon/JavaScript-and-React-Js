import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Diaglog from './diaglog';

export default function App() {
  const [time, setTime] = useState(0);
  const [isAlert, setAlert] = useState(false);
  const [timer, settimer] = useState(0);
  const [openDiaglog, setOpenDiaglog] = useState(false);



  useEffect(() => {
    if (isAlert && time < timer) {
      const id = window.setInterval(() => {
        setTime(time + 1);
        console.log("time >>", time);
      }, 1000);
      return () => {
        window.clearInterval(id);
      }
    } else if (isAlert && time == timer) {
      setOpenDiaglog(true);
      // alert("alram");
      setTime(0);
      setAlert(false);
    }
  }, [isAlert, time, timer])

  function onCloseDiaglog(){
    setOpenDiaglog(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>Timer App</h1>
      <div>
        <TextField id="time" label="Select your time" helperText="Set timer (in seconds)" onChange={(event) => { settimer(event.target.value); setTime(0) }} />
        <TextField disabled={true} value={time} style={{ width: "100px", margin: '15px', border: 'solid black 1px', borderRadius: '5px', fontSize: 'large', paddingLeft: '90px' }} />
      </div>
      {isAlert ?
        <Button variant="contained" onClick={() => setAlert(false)} style={{ marginLeft: '80%' }}>Pause</Button>
        : <Button variant="contained" onClick={() => {setAlert(true);setOpenDiaglog(false)}} style={{ marginLeft: '80%' }}>Start</Button>
      }
      <div>
        <Diaglog openDiaglog={openDiaglog} closeDiaglog={onCloseDiaglog}/>
      </div>
    </div>
  )
}
