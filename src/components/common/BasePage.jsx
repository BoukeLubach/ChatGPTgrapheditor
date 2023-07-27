import React from 'react'

function Basepage(props) {
    return (

        <div class="container  py-6">
            <div class="w-full md:w-11/12 lg:w-10/12 ">
                <div class="flex flex-col">
                    <h1 class="text-4xl font-bold font-sans mb-4 ml-2 lg:ml-4">
                        <var>{props.title}</var>
                    </h1>
                    <div class="flex flex-col space-y-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Basepage