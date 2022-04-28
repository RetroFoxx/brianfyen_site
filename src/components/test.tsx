import * as React from 'react'

interface TestProp {
    name: string;
}

const Test = (props: TestProp) => {
    return (
        <main>
            <p>Busack {props.name}</p>
        </main>
    )
}

export default Test
