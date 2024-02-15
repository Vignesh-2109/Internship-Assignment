import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <div>
 <div>
            <h1>Welcome to Admin Dashboard</h1>
            <p>This is the landing page of the Admin Dashboard.</p>
            <p>You can manage your devices here.</p>
            <section>
                <h2>Manage Devices</h2>
                <p>Click the button below to manage your devices.</p>
                <Link to="/devices">
                    <button>Manage Devices</button>
                </Link>
            </section>
        </div>

    </div>
  )
}

export default Landing