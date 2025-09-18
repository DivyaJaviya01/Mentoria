import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-10">
            © {new Date().getFullYear()} Mentoria. All rights reserved.
        </footer>
    );
}

export default Footer;
