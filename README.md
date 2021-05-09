# kdrama-api

baseURL: http://localhost:8000
endpoint: kdrama

## Goal:
Given my mocks kdrama.json data:
1. render using server side rendering
2. set href that links to something

## how to run kdrama-api express server locally
1. npm init -y
1. npm install express
1. npm run start
1. check kdrama endpoint in postman

## result: 
```json
[
    {
        "title": "Secret Garden",
        "original_title": "시크릿 가든",
        "channel": "sbs",
        "aired": "2010",
        "homeURL": "https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%AC%EB%A6%BF_%EA%B0%80%EB%93%A0_(%EB%93%9C%EB%9D%BC%EB%A7%88)",
        "ostvideo": "https://youtu.be/3yOJEb9MuFY",
        "bestvideo": [
            "https://youtu.be/XpL0vMv32-w",
            "https://youtu.be/kSlHKF086Yc"
        ],
        "poster": "https://cphoto.asiae.co.kr/listimglink/6/2010121710392042992_1.jpg"
    },
    {
        "title": "Autumn in My Heart",
        "original_title": "가을동화",
        "channel": "kbs",
        "aired": "2000",
        "homeURL": "https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%AC%EB%A6%BF_%EA%B0%80%EB%93%A0_(%EB%93%9C%EB%9D%BC%EB%A7%88)",
        "ostvideo": "https://youtu.be/WFDO5QAPelw",
        "bestvideo": "https://youtu.be/Eho3fE4UCPU",
        "poster": "https://thumb.mt.co.kr/06/2008/12/2008121015215578058_2.jpg"
    },
    {
        "title": "Crash Landing on You",
        "original_title": "사랑의 불시착",
        "channel": "tvN",
        "aired": "2019",
        "homeURL": "https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%AC%EB%A6%BF_%EA%B0%80%EB%93%A0_(%EB%93%9C%EB%9D%BC%EB%A7%88)",
        "ostvideo": "https://youtu.be/Cmomc1SnXaA",
        "bestvideo": "https://youtu.be/RhgUUVmBLwI",
        "poster": "https://thumb.mt.co.kr/06/2019/12/2019121613152133576_1.jpg"
    },
    {
        "title": "Feeling",
        "original_title": "느낌",
        "channel": "kbs",
        "aired": "1994",
        "homeURL": "https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%AC%EB%A6%BF_%EA%B0%80%EB%93%A0_(%EB%93%9C%EB%9D%BC%EB%A7%88)",
        "ostvideo": "https://youtu.be/iehGgNjC-KA",
        "bestvideo": "https://youtu.be/j1fFwiDLVn4?t=890",
        "poster": "https://img.theqoo.net/img/tUOuc.png"
    },
    {
        "title": "Propose",
        "original_title": "프로포즈",
        "channel": "kbs",
        "aired": "1997",
        "homeURL": "https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%AC%EB%A6%BF_%EA%B0%80%EB%93%A0_(%EB%93%9C%EB%9D%BC%EB%A7%88)",
        "ostvideo": "https://youtu.be/xJYOz-cboM8",
        "bestvideo": "https://youtu.be/lWiZ_wFubzU",
        "poster": "https://image.bugsm.co.kr/album/images/1000/95/9577.jpg"
    }
]
```