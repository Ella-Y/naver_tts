# naver_tts
라즈베리파이3 jessie 기반으로 Clova Speech Synthesis Api 를 이용하여 node.js를 사용했습니다.
node.js version: 6.11.3
해당 코드는 node.js에서 tts api를 이용하여 오디오스트림을 받은 후 mp3로 저장하고 omxplayer를 사용하여 출력합니다.
omxplayer는 jessie 이후로 기본으로 깔려있습니다.

### 기본설치
------------------------
    npm install node-omxplayer
만약 lite버전이라면 omxplayer를 깔아야 합니다.
  sudo apt-get install omxplayer
  
### client_id,client_secret
developers.naver.com 에 가셔서 자신의 application을 등록하고 자신의 client id와 client secret을 알아와야합니다.

#### 도움
www.npmjs.com/package/node-omxplayer
https://developers.naver.com/docs/clova/api/#/CSS/API_Guide.md#Preparation

