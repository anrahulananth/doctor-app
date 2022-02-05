const authApi = (payload) =>
    axios
        .post("https://wd8zuu3ctg.execute-api.us-east-2.amazonaws.com/test/auth", )
        .then(({ data }) => console.log(data));
