import client from "./client";



export const login = ({ username, password }) => client.post('/api/auth/login', ({ username, password }));

export const register = ({ username, password, admin }) => client.post('/api/auth/register', ({ username, password, admin }));

export const logout = () => client.get('/api/auth/logout');
