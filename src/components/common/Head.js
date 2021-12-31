const Head = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="robots" content="index, follow"/>
            {/** TODO: page desc */}
            <meta name="description" content="Diva Care"/>
            {/** TODO: page title */}
            <meta name="title" content="Diva Care" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/** TODO: page keywords */}
            <meta name="keywords" content="Progressive Web Application"/>

            <meta name="theme-color" content="#0F1624" />
            <meta name="mobile-web-app-capable" content="yes" />

            <meta name="full-screen" content="yes" />
            <meta name="browsermode" content="application" />
            <meta name="nightmode" content="enable" />

            <meta name="layoutmode" content="fitscreen/standard" />
            <meta name="imagemode" content="force" />
            <meta name="screen-orientation" content="portrait" />

            <link rel="canonical" href={process.env.HOST_NAME} />
            <link rel="manifest" href="/manifest.json" />
            {/** TODO: page seo */}
        </>
    );
};

export default Head;
