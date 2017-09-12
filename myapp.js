var client_id = 'your_client_id';
var client_secret = 'your_client_secret';
var fs = require('fs');
var api_url = 'https://openapi.naver.com/v1/voice/tts.bin';
var request = require('request');
var text='거실에 불을 켰습니다'
var options={
	url: api_url,
	form: {'speaker':'mijin', 'speed':'0', 'text':text},
	headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
};
var writeStream = fs.createWriteStream('./test.mp3');
var req=request.post(options).on('response',function(response){
		console.log(response.statusCode)
		console.log(response.headers['content-type'])
});
req.pipe(writeStream.on('finish',function(){
	console.log('finish');
	var omx=require('node-omxplayer');
	var player=omx('test.mp3','local');
	player.play()
	player.quit()
}));
