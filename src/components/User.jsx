import React from 'react';
import Button from 'react-bootstrap/Button';

const User = () => {
  return (
    <>
    <h1 className='text-center mt-5'>User</h1>
    <main className='mt-5 user'>
    <div className='mb-3'>
        <input type="text" placeholder='Put some text' className='d-block w-50 m-auto' /> </div>
        <Button className='d-block m-auto btn-dark'>Approve USDC</Button>
     <div className='mb-3 mt-4 justify-content-center'>
        <input type="text" placeholder='Put some text' className='d-block w-50 m-auto' />
        </div>
        <Button className='d-block m-auto btn-dark'>Approve MANA</Button>
        <div className='mb-3 mt-4'>  
        <input type="text" placeholder='Put some text' className='d-block w-50 m-auto' />
        </div>
        <Button className='d-block m-auto mb-5 btn-dark'>Approve SAND</Button>
        </main>
    </>
  )
}

export default User