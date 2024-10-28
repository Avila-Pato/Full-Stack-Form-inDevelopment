"use client";
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'; // Asegúrate de importar el icono de la luna
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

     // Posible error aqui
    useEffect(() => {
        setMounted(true);
    }, []);
// Evitar el renderizado antes de que el cliente esté montado
    if (!mounted) return null;

    return (
        <Tabs defaultValue={theme}>
            <TabsList className='border'>
                <TabsTrigger value='light' onClick={() => setTheme("light")}>
                    <SunIcon className='h-[1.2rem] w-[1.2rem]' />
                </TabsTrigger>
                <TabsTrigger value='dark' onClick={() => setTheme("dark")}>
                    <MoonIcon className='h-[1.2rem] w-[1.2rem]' />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}

export default ThemeSwitcher;
