import React from 'react';
import BoldNavBar from './navbar/BoldNavBar';

type BoldProps = {
    children?: React.ReactNode;
};

export default function Bold() {
    return (
        <div className="flex min-h-screen bg-accent/5 ">
            <div className={` flex-1 transition-all duration-300 `}>

                <BoldNavBar/>
                <main className="w-full px-6 justify-center">
                    
                </main>
            </div>
        </div>
    );
}