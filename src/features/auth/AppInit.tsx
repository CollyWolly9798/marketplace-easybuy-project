'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setAccessToken } from '@/lib/redux/auth/slice';
import { refreshUser } from '@/lib/redux/auth/operations';

const AppInit = () => {
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector((state) => state.auth.accessToken);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');

        if (storedAccessToken) {
            axios.defaults.headers.common.Authorization = `Bearer ${storedAccessToken}`;
            dispatch(setAccessToken(storedAccessToken));
        } else if (storedRefreshToken) {
            dispatch(refreshUser());
        }
    }, [dispatch]);

    useEffect(() => {
        if (accessToken) {
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        }
    }, [accessToken]);

    return null;
};

export default AppInit;
