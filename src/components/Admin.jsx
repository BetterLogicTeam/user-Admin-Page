import React from 'react';
import Button from 'react-bootstrap/Button';

const Admin = () => {
  return (
    <>
      <h1 className='text-center mt-5 mb-5'>Admin</h1>
      
      <main className='d-flex flex-column'>
        <div className="text-center">
      <Button className='mb-4 text-center' variant="light">Withdraw USDC</Button>
      </div>
      <div className="text-center">
      <Button className='mb-4' variant="dark">Withdraw MANA</Button>
      </div>
      <div className="text-center">
      <Button className='mb-4' variant="success">Withdraw SAND</Button>
      </div>
      </main>
    </>
  )
}

export default Admin