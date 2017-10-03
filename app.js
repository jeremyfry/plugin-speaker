import express from 'express';
import * as child from 'child_process';
const app = express();
const port = process.env.PORT || 8080;


app.get('/play/:sound', (req, res) => {
	switch(req.params.sound){
		case 'pantry':
			playSound('pantryopen.mp3');
			break;
		default:
			playSound('alert.wav');
	}
	res.sendStatus(200);
});

const playSound = (soundFile)=>{
	child.exec ('aplay ./sound-files/'+soundFile);
};

app.listen(port);