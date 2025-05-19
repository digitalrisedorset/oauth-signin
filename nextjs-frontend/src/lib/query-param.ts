'use client';

import { useSearchParams } from 'next/navigation';

export const getUrlParam = (name: string) => {
    const searchParams = useSearchParams();
    return searchParams.get(name);
}
