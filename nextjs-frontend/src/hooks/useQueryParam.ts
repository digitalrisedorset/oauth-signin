'use client';

import { useSearchParams } from 'next/navigation';

export const useQueryParam = (name: string) => {
    const searchParams = useSearchParams();
    return searchParams.get(name);
}
