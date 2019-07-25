(()=>{

  console.log("hallo");


  const piecesBoard = document.querySelector('.songIcons'),

	dropZones = document.querySelectorAll('.dropZones');

//Creating Audios
  let alienSound1 = document.createElement('audio');
  alienSound1.src = "audio/Song1/Arp1.wav",
  fluteSound1 = document.createElement('audio');
  fluteSound1.src = "audio/Song1/Flute.wav",
  drumSound1 = document.createElement('audio');
  drumSound1.src = "audio/Song1/Drums.wav",
  choirSound1 = document.createElement('audio');
  choirSound1.src = "audio/Song1/Arp2.wav",
  bellSound1 = document.createElement('audio');
  bellSound1.src = "audio/Song1/Pluck.wav",
  pianoSound1 = document.createElement('audio');
  pianoSound1.src = "audio/Song1/Piano.wav",

  xiloSound2 = document.createElement('audio');
  xiloSound2.src = "audio/Song2/Pad.wav",
  cloudSound2 = document.createElement('audio');
  cloudSound2.src = "audio/Song2/Arp.wav",
  pianoSound2 = document.createElement('audio');
  pianoSound2.src = "audio/Song2/Paino.wav",
  choirSound2 = document.createElement('audio');
  choirSound2.src = "audio/Song2/Choir.wav",
  drumSound2 = document.createElement('audio');
  drumSound2.src = "audio/Song2/Drums.wav",
  bellSound2 = document.createElement('audio');
  bellSound2.src = "audio/Song2/Flute.wav";





  //End of audios

let draggablePieces = piecesBoard.querySelectorAll(".songIcons img");

draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');

			e.dataTransfer.setData("text/plain", this.id);

		});
	});


dropZones.forEach(zone => {
	zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log('dragged something over me');

		if (this.childElementCount == 1) {
		console.log('one-child family! Go away!!');
		return;
	}

});

zone.addEventListener("drop", function(e){



	e.preventDefault(); // dont do your default behaviour instead do the following (console log)
	console.log('you dropped something over me');

	let draggedElement = e.dataTransfer.getData("text/plain");

  //classList to alter the songIcons

  

  //make audio play
  //song1
  if (draggedElement == "AlienSong1"){
    document.body.appendChild(alienSound1);
    alienSound1.loop = true;
    alienSound1.play();
  }

  else if (draggedElement == "DrumsSong1"){
    document.body.appendChild(drumSound1);
    drumSound1.loop = true;
    drumSound1.play();
  }

  else if (draggedElement == "FluteSong1"){
    document.body.appendChild(fluteSound1);
    fluteSound1.loop = true;
    fluteSound1.play();
  }

  else if (draggedElement == "PianoSong1"){
    document.body.appendChild(pianoSound1);
    pianoSound1.loop = true;
    pianoSound1.play();
  }

  else if (draggedElement == "BellSong1"){
    document.body.appendChild(bellSound1);
    bellSound1.loop = true;
    bellSound1.play();
  }

  else if (draggedElement == "ChoirSong1"){
    document.body.appendChild(choirSound1);
    choirSound1.loop = true;
    choirSound1.play();
  }
//Song2
  else if (draggedElement == "XiloSong2") {
    document.body.appendChild(xiloSound2);
    xiloSound2.loop = true;
    xiloSound2.play();
  }

  else if (draggedElement == "BellSong2") {
    document.body.appendChild(bellSound2);
    bellSound2.loop = true;
    bellSound2.play();
  }

  else if (draggedElement == "ChoirSong2") {
    document.body.appendChild(choirSound2);
    choirSound2.loop = true;
    choirSound2.play();
  }

  else if (draggedElement == "DrumsSong2") {
    document.body.appendChild(drumSound2);
    drumSound2.loop = true;
    drumSound2.play();
  }

  else if (draggedElement == "PianoSong2") {
    document.body.appendChild(pianoSound2);
    pianoSound2.loop = true;
    pianoSound2.play();
  }

  else if (draggedElement == "CloudSong2") {
    document.body.appendChild(cloudSound2);
    cloudSound2.loop = true;
    cloudSound2.play();
  }



	console.log('you dragged: ',draggedElement);

	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	//^Snaps to squares


});

});



})();
