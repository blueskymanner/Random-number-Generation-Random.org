import React, { useEffect, useState } from "react";
import RandomOrg from 'random-org';


function Random() {
    const [list, setList] = useState(false);
    const [arrayRandom, setArrayRandom] = useState([23,456,785,34,6778,983,345,5678,3036,346,83,3,6754,784,367,4666,25,43,456,343,673,22,5677,8876,7886,678,24356,4562,5,74,736,432,5557,5352,223,6678,89]);
    let random = new RandomOrg({ apiKey: '83551ae9-cee8-4089-b573-1116441c4216' });

    const randomize = async () => {
        return new Promise(async (resolve, reject) => {
            random.generateIntegers({ min: 1, max: 99, n: 99 }).then(function (result) {
                console.log(result.random.data);
                resolve(result.random.data);
            });
        });
    }

    useEffect(() => {
        (async () => {
            const randomNums = await randomize();
            setArrayRandom(randomNums);
        })()
    }, []);

    const GenerateRandom = () => {
        setList(true);
    }

    return (
        <div className="top-section">
            <h1>
                Random Result
            </h1>
            <button onClick={GenerateRandom} className="random-button">Generate</button>
            <br></br>
            <br></br>
            {list && arrayRandom.map((item, index) =>
                    <div key={index}>
                        {item}
                    </div>
                )
            }
        </div>
    )
}

export default Random;