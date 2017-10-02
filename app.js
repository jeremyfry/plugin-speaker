import express from 'express';
import Sound from 'node-aplay';
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
	new Sound('./sound-files/'+soundFile).play();
};

app.listen(port);