export interface Video {
    id : String,
    creationTime: Number,
    creatorId: String,
    start: Array<Number>,
    end: Array<Number>,
    channelId: String,
    time: Number,
    quotes: Array<String>,
    previewImage: String,
    deleted: Boolean
}


/*
"video": {
    "id": "9u-OpB00zvk",
    "creationTime": 1482595881511,
    "creatorId": "584d9df7d18ab20004a7ef71",
    "start": [
        655,
        681,
        669,
        796,
        643
    ],
    "end": [
        655,
        681,
        669,
        796,
        643
    ],
    "quotes": [
    ],
    "channelId": "UCB6sc84dcg6VQGB_d89sx2g",
    "time": 1339290518000,
    "previewImage": null,
    "deleted": false,
    "target": {
        "id": "9u-OpB00zvk",
        "creationTime": 1482595881511,
        "creatorId": "584d9df7d18ab20004a7ef71",
        "start": [
            655,
            681,
            669,
            796,
            643
        ],
        "end": [
            655,
            681,
            669,
            796,
            643
        ],
        "quotes": [
        ],
        "channelId": "UCB6sc84dcg6VQGB_d89sx2g",
        "time": 1339290518000,
        "previewImage": null,
        "deleted": false
    }
}
*/
