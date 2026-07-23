import React, { createContext, useContext, useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { profile } from '../services/authService';


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { data: user, setData: setUser, isLoading: isCheckingSession, refetch: refreshProfile } = useApi(profile);

    return (
        <AuthContext.Provider value={{ user, setUser, isCheckingSession, refreshProfile }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}