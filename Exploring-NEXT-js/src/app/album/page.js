import Image from 'next/image';
import React from 'react';
import nextImage from "@/assets/nextjs-logo-square.png"

const AlbumPage = () => {
    return (
        <div>
            <h1>This is image compo</h1>
            <Image src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" width={500} height={500} alt='next logo'/>
            <h1>This is imported img</h1>
            <Image src={nextImage}width={500} height={500} alt='next logo'/>
            <h1>This is img tag</h1>
            <img src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" width="500px" height="500px" alt='next logo'/>
        </div>
    );
};

export default AlbumPage;