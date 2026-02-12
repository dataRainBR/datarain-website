import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types/admin';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Carregar dados do localStorage ao iniciar
    const storedToken = localStorage.getItem('admin_token');
    const storedUser = localStorage.getItem('admin_user');

    if (storedToken && storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          token: storedToken,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Erro ao carregar dados de autenticação:', error);
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Por enquanto, vamos usar dados mockados
    // Em produção, isso seria uma chamada à API
    const users = getStoredUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      return false;
    }

    // Verificar senha (em produção, usar bcrypt)
    if (user.password !== password) {
      return false;
    }

    // Gerar token (em produção, usar JWT)
    const token = btoa(`${email}:${Date.now()}`);

    // Atualizar último login
    user.lastLogin = new Date().toISOString();
    updateStoredUser(user);

    // Salvar no localStorage
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin_user', JSON.stringify(user));

    setAuthState({
      user,
      token,
      isAuthenticated: true,
    });

    return true;
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  };

  const updateUser = (user: User) => {
    localStorage.setItem('admin_user', JSON.stringify(user));
    setAuthState(prev => ({
      ...prev,
      user,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Funções auxiliares para gerenciar usuários no localStorage
function getStoredUsers(): User[] {
  const stored = localStorage.getItem('admin_users');
  if (!stored) {
    // Criar usuário inicial
    const initialUser: User = {
      id: '1',
      email: 'eduardo.aoki@datarain.com.br',
      password: 'Missisip123!',
      name: 'Eduardo Aoki',
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('admin_users', JSON.stringify([initialUser]));
    return [initialUser];
  }
  return JSON.parse(stored);
}

function updateStoredUser(user: User) {
  const users = getStoredUsers();
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
    localStorage.setItem('admin_users', JSON.stringify(users));
  }
}
