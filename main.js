; (function () {

  const actTakePicture = document.getElementById("actTakePicture");
  actTakePicture.addEventListener("click",event=>{
    fetch("http://192.168.122.1:8080/sony/camera", {
      method: 'POST',
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "method": "actTakePicture",
        "params": [],
        "id": 1,
        "version": "1.0",
      }),
      redirect: 'follow'
    })
  })

  navigator.serviceWorker.register('./sw.js');
}());