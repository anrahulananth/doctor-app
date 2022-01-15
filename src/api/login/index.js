export default function (req, res) {
    res.status(200).json({
        "statusCode": 200,
        "body": {
            "idToken": "eyJraWQiOiJBVnFDOEN0UXlwd0R",
            "accessToken": "eyJraWQiOiJCS0xEeHdwTEdjV2UxeEhyKzNZTXIy",
            "refreshToken": "eyJjdH",
            "message": "Successfully login"
        }
    })
}
