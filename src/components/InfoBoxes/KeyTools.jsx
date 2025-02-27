import React from 'react'

const KeyTools = ({ keyTools }) => {
    return (
        <div>
            {keyTools.map(keyTool => {
                return (
                    <>
                        <container className='col-6'>
                            <div className='icon col-2'>
                                <img src='./certificate.svg' className='icon' />
                            </div>
                            <div className='description col-10'>
                                <p>{keyTool}</p>
                            </div>
                        </container>
                    </>
                )
            })

            }</div>
    )
}

export default KeyTools