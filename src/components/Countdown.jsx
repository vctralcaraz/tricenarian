/**
 *  2022 Sergi S. - https://github.com/sergiss
 */

import React, { useEffect, useState } from 'react'
import { Number } from './Number'
import { Word } from './Word'

export const Countdown = ({tgt = 1708416000000 - Date.now(), event}) => {

    const [millis , setMillis ] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours  , setHours  ] = useState(0);
    const [days, setDays] = useState(0);

    const [time, setTime] = useState(tgt);

    useEffect(()=> {

        const interval = setInterval(()=> {

            setTime(time=> {

                if(time <= 0) {
                    clearInterval(interval);
                    setMillis(0);
                    setSeconds(0);
                    setMinutes(0);
                    setHours(0);
                    setDays(0);
                    event();
                    return 0;
                } else {
                    setMillis(time % 99);
                    setSeconds(Math.floor((time / 1000) % 60));
                    setMinutes(Math.floor((time / 1000/ 60) % 60));
                    setHours(Math.floor((time / 1000 / 60 / 60) % 24));
                    setDays(Math.floor((time / 1000 / 60 / 60 / 24)));
                    return time - 60;
                }

            });
        }, 60);

        return e => clearInterval(interval);

    }, []);

    const addTime = ()=> {
        setTime(time + 10000);
    }

    return (
        <div className='clock'>

            <h1>Countdown To Karly's Tricenarianship!!</h1>

            <div className='countdown'>
                <Number value={days} />
                <Word value={':'} />
                <Number value={hours} />
                <Word value={':'} />
                <Number value={minutes} />
                <Word value={':'} />
                <Number value={seconds} />
                <Word value={':'} />
                <Number value={millis} />
            </div>

        </div>
    )
}
