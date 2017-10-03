import express from 'express';
import * as child from 'child_process';
const app = express();
const port = process.env.PORT || 80;


app.get('/play/:sound', (req, res) => {
	switch(req.sound){
		case 'alert':
			playSound('alert.wav');
			break;
		default:
			playSound('reject.wav');
	}
	res.sendStatus(200);
});

const playSound = (soundFile)=>{
	child.exec ('aplay ./sound-files/'+soundFile);
};

app.listen(port);