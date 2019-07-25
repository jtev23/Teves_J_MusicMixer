(()=>{

  console.log("hallo");


  const piecesBoard = document.querySelector('.songIcons'),

	dropZones = document.querySelectorAll('.dropZones');

//Creating Audios
  let alienSound = document.createElement('audio');
  alienSound.src = "audio/Song1/Arp1.wav";

  let fluteSound = document.createElement('audio');
  alienSound.src = "audio/Song1/Flute.wav";

  let drumSound1 = document.createElement('audio');
  drumSound1.src = "audio/Song1/Drums.wav";

  let choirSound1 = document.createElement('audio');
  choirSound1.src = "audio/Song1/Arp2.wav";

  let bellSound1 = document.createElement('audio');
  bellSound1.src = "audio/Song1/Pluck.wav";

  let pianoSound1 = document.createElement('audio');
  pianoSound1.src = "audio/Song1/Piano.wav";



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

  //make audio play
  if (draggedElement.id == "AlienSong1")

{  document.body.appendChild(alienSound);
  alienSound.play();}

  else if (draggedElement.id == "DrumsSong1")

  {document.body.appendChild(drumSound1);
  drumSound1.play();}

  else if (draggedElement.id == "FluteSong1")

{  document.body.appendChild(fluteSound);
  fluteSound.play();}

  else if (draggedElement.id == "PianoSong1")

  {document.body.appendChild(pianoSound1);
  pianoSound1.play();}

  else if (draggedElement.id == "BellSong1")

  {document.body.appendChild(bellSound1);
  bellSound1.play();}

  else if (draggedElement.id == "ChoirSong1")

  {document.body.appendChild(choirSound1);
  choirSound1.play();}



	console.log('you dragged: ',draggedElement);

	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	//^Snaps to squares


});

});

})();
