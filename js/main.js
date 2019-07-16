(()=>{

  console.log("hallo");


  const piecesBoard = document.querySelector('.songIcons'),

	dropZones = document.querySelectorAll('.Disc');

let draggablePieces = piecesBoard.querySelectorAll("img");

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
		{return;}
	}

});

zone.addEventListener("drop", function(e){
	e.preventDefault(); // dont do your default behaviour instead do the following (console log)
	console.log('you dropped something over me');

	let draggedElement = e.dataTransfer.getData("text/plain");

	console.log('you dragged: ',draggedElement);

	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	//^Snaps to squares
});
});

})();
