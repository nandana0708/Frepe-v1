import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Drop() {
  return (
    <div>
        <Dropdown>
            <Dropdown.Toggle variant='' id='dropdown-basic'>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='/login'>Login</Dropdown.Item>
                <Dropdown.Item href='#'>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      
    </div>
  )
}

export default Drop
