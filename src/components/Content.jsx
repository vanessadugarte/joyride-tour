import React, {useState} from 'react';
import Joyride, {STATUS} from 'react-joyride';

const steps = [
    {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
    },
    {
        target: '.my-other-step',
        content: 'This another awesome feature!',
    },
];

const Content = () => {

    const [{run,steps}, setState] = useState({
        run: true,
        steps:[
            {
                content: <h2>Comencemos</h2>,
                locale: {skip: <strong>saltar</strong>},
                placement:"center",
                target: "body",
            },
            {
                content: (
                    <>
                        <iframe
                            src="https://giphy.com/embed/9G5jQV0mMHOJzfw00T"
                            width="480"
                            height="360"
                            style={{ border: "none" }}
                            frameBorder="0"
                            className="giphy-embed"
                            allowFullScreen
                        ></iframe>
                        <p>
                            <a href="https://giphy.com/gifs/wednesday-chippythedog-hump-day-9G5jQV0mMHOJzfw00T">
                            </a>
                        </p>
                    </>
                ),
                placement:"bottom",
                target: "#step-1",
                title:"first step",
            },
            {
                content: <h2>Acá puedes abrir el detalle de un documento 2</h2>,
                placement:"bottom",
                target: "#step-2",
                title:"second step",
            },
            {
                content: <h2>Acá puedes abrir el tercer detalle</h2>,
                placement:"bottom",
                target: "#step-3",
                title:"third step",
            },
            {
                content: <h2>444</h2>,
                placement:"bottom",
                target: "#step-4",
                title:"fourth step",
            },
            {
                content: <h2>quinto paso</h2>,
                placement:"bottom",
                target: "#step-5",
                title:"fifth step",
            },
        ]
    });

    return (
        <>
            <div style={{
                background:"#797979",
                height:"100vh",
                display: "flex",
                gap: "8px",
                padding: 10,
            }}>
                <Joyride
                    continuous
                    callback={() => {
                    }}
                    run={run}
                    steps={steps}
                    hideCloseButton
                    scrollToFirstStep
                    showSkipButton
                    showProgress
                />
                {[1,2,3,4,5].map((item) => (
                    <div
                        key={item}
                        id={`step-${item}`}
                        style={{
                            border: "1px solid white",
                            width:"100px",
                            height:"100px",
                            color:"white",
                            background:"#0c1d2b",
                            borderRadius:"8px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                        }}>
                        {item}
                    </div>
                ))}
            </div>
            <Joyride steps={steps} />
        </>
    );
};

export default Content;