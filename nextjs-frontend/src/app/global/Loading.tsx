import Image from "next/image";
import React from "react";

export const Loading: React.FC = () => {
    return (
        <Image className="loading" src={`/loading.gif`} width="100" height="100" alt="Loading..."/>
    );
}