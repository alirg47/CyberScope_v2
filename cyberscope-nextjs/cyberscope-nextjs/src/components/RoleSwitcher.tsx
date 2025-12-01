'use client';

import React from 'react';
import { useAuth, UserRole } from '@/context/AuthContext';
import { Shield, ChevronDown } from 'lucide-react';

export default function RoleSwitcher() {
    const { role, switchRole } = useAuth();
    const [isOpen, setIsOpen] = React.useState(false);

    const roles: UserRole[] = ['SOC Lead', 'L1 Analyst', 'L2 Analyst', 'L3 Analyst'];

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid var(--primary-accent)',
                    borderRadius: '6px',
                    color: 'var(--primary-accent)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 600
                }}
            >
                <Shield size={16} />
                <span>{role}</span>
                <ChevronDown size={14} />
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    padding: '4px',
                    minWidth: '160px',
                    zIndex: 100,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(12px)'
                }}>
                    {roles.map((r) => (
                        <button
                            key={r}
                            onClick={() => {
                                switchRole(r);
                                setIsOpen(false);
                            }}
                            style={{
                                display: 'block',
                                width: '100%',
                                textAlign: 'left',
                                padding: '8px 12px',
                                background: role === r ? 'rgba(0, 243, 255, 0.1)' : 'transparent',
                                color: role === r ? 'var(--primary-accent)' : 'var(--text-secondary)',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                marginBottom: '2px'
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
