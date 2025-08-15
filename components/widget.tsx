/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Settings, Sun, Moon, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Widget = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [position, setPosition] = useState({ x: window.innerWidth - 80, y: 100 });
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [theme, setTheme] = useState('light');
    const { language, setLanguage } = useLanguage()
    const [langue, setLangue] = useState('fr');
    const [isHovered, setIsHovered] = useState(false);
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0, time: 0 });

    const widgetRef = useRef(null);
    const animationFrameRef = useRef<number | null>(null);
    const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'en', name: 'English', flag: 'EN' },
    ];

    // Animation fluide vers une position
    const animateToPosition = useCallback((targetX: number, targetY: number, duration = 600) => {
        const startX = position.x;
        const startY = position.y;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function pour une animation plus naturelle
            const easeOutElastic = (t: any) => {
                const c4 = (2 * Math.PI) / 3;
                return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
            };

            const easedProgress = progress < 1 ? easeOutElastic(progress) : 1;

            const currentX = startX + (targetX - startX) * easedProgress;
            const currentY = startY + (targetY - startY) * easedProgress;

            setPosition({ x: currentX, y: currentY });

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        };

        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animate();
    }, [position]);

    // État pour savoir de quel côté est le widget
    const [isOnRightSide, setIsOnRightSide] = useState(window.innerWidth - 80 > window.innerWidth / 2);
    const [hasMoved, setHasMoved] = useState(false)

    // Fonction pour coller au bord avec inertie
    const snapToEdge = useCallback(() => {
        const widgetSize = 64;
        const margin = 20;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Ajouter l'inertie à la position finale
        let finalX = position.x + velocity.x * 0.3;
        let finalY = position.y + velocity.y * 0.3;

        // Déterminer le bord le plus proche
        const centerX = finalX + widgetSize / 2;
        const snapToLeft = centerX < windowWidth / 2;

        const targetX = snapToLeft ? margin : windowWidth - widgetSize - margin;
        const targetY = Math.max(margin, Math.min(finalY, windowHeight - widgetSize - margin));

        // Mettre à jour le côté où se trouve le widget
        setIsOnRightSide(!snapToLeft);

        animateToPosition(targetX, targetY, 800);
    }, [position, velocity, animateToPosition]);

    // Démarrer le drag
    const startDrag = (clientX: number, clientY: number) => {
        setIsDragging(true);
        setHasMoved(false)
        setDragStart({ x: clientX - position.x, y: clientY - position.y });
        setLastPosition({ x: clientX, y: clientY, time: Date.now() });
        setVelocity({ x: 0, y: 0 });

        if (snapTimeoutRef.current) {
            clearTimeout(snapTimeoutRef.current);
        }
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    };

    // Handlers pour mouse
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
    };

    // Handlers pour touch
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        startDrag(touch.clientX, touch.clientY);
    };

    // Mouvement pendant le drag
    const updatePosition = useCallback((clientX: number, clientY: number) => {
        if (!isDragging) return;

        const now = Date.now();
        const newX = clientX - dragStart.x;
        const newY = clientY - dragStart.y;

        const deltaX = Math.abs(newX - position.x)
        const deltaY = Math.abs(newY - position.y)

        if (deltaX > 5 || deltaY > 5) {
            setHasMoved(true)
        }

        // Calculer la vélocité pour l'inertie
        const deltaTime = now - lastPosition.time;
        if (deltaTime > 0) {
            const velX = (clientX - lastPosition.x) / deltaTime * 16; // Normaliser à 60fps
            const velY = (clientY - lastPosition.y) / deltaTime * 16;
            setVelocity({ x: velX, y: velY });
        }

        setPosition({ x: newX, y: newY });
        setLastPosition({ x: clientX, y: clientY, time: now });
    }, [isDragging, dragStart, lastPosition, position]);

    const handleMouseMove = (e: React.MouseEvent) => updatePosition(e.clientX, e.clientY);
    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        updatePosition(touch.clientX, touch.clientY);
    };

    // Fin du drag
    const endDrag = () => {
        if (!isDragging) return;
        setIsDragging(false);

        // Attendre un peu avant de snapper pour permettre à l'inertie de s'appliquer
        snapTimeoutRef.current = setTimeout(() => {
            snapToEdge();
        }, 50);

    };

    // Event listeners
    useEffect(() => {
        if (isDragging) {
            const handleMouseMoveGlobal = (e: any) => handleMouseMove(e);
            const handleTouchMoveGlobal = (e: any) => {
                e.preventDefault();
                handleTouchMove(e);
            };
            const handleMouseUp = () => endDrag();
            const handleTouchEnd = () => endDrag();

            document.addEventListener('mousemove', handleMouseMoveGlobal, { passive: false });
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);

            return () => {
                document.removeEventListener('mousemove', handleMouseMoveGlobal);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('touchmove', handleTouchMoveGlobal);
                document.removeEventListener('touchend', handleTouchEnd);
            };
        }
    }, [isDragging, handleMouseMove, handleTouchMove]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (snapTimeoutRef.current) {
                clearTimeout(snapTimeoutRef.current);
            }
        };
    }, []);

    // Actions
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    const changeLanguages = (langCode: string) => {
        setLanguage(langCode)
        setLangue(langCode);
        setIsExpanded(false);
    };

    const handleWidgetClick = (e: any) => {
        if (!isDragging && !hasMoved) {
            setIsExpanded(true);
        }
    };

    return (
        <>
            <div
                ref={widgetRef}
                className={`fixed z-50 select-none transition-opacity duration-300 ${isHovered || isExpanded || isDragging ? 'opacity-100' : 'opacity-20'
                    }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                    transition: isDragging ? 'transform 0.1s ease-out' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    willChange: 'transform',
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Widget fermé */}
                <div
                    className={`w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/20 flex items-center justify-center transition-all duration-500 ${isExpanded ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
                        }`}
                    onClick={handleWidgetClick}
                    style={{
                        transform: `scale(${isDragging ? 1.1 : 1})`,
                        transition: isDragging ? 'transform 0.1s ease-out' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
                    <Settings
                        className={`w-6 h-6 text-white transition-transform duration-300 ${isHovered ? 'rotate-90' : 'rotate-0'
                            }`}
                    />
                </div>

                {/* Widget étendu */}
                <div
                    className={`absolute top-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-500 ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                        }`}
                    style={{
                        width: '280px',
                        left: isOnRightSide ? '-216px' : '0px', // Décaler vers la gauche si on est à droite
                        transformOrigin: isOnRightSide ? 'top right' : 'top left',
                    }}
                >
                    {isExpanded && (
                        <div className="p-4 space-y-4">
                            {/* Header avec animation */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-white font-semibold text-sm animate-fade-in">Paramètres</h3>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                    className="text-white/70 hover:text-white transition-all duration-200 p-1 rounded-lg hover:bg-white/10 hover:rotate-90"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Changement de thème */}
                            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                <label className="text-white/80 text-xs font-medium">Thème</label>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleTheme();
                                    }}
                                    className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 text-white border border-white/10 hover:scale-105 active:scale-95"
                                >
                                    {theme === 'light' ? (
                                        <Sun className="w-5 h-5 text-yellow-400 transition-transform hover:rotate-12" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-blue-300 transition-transform hover:-rotate-12" />
                                    )}
                                    <span className="text-sm">
                                        {theme === 'light' ? 'Mode Clair' : 'Mode Sombre'}
                                    </span>
                                </button>
                            </div>

                            {/* Changement de langue */}
                            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                <label className="text-white/80 text-xs font-medium">Langue</label>
                                <div className="space-y-1">
                                    {languages.map((lang, index) => (
                                        <button
                                            key={lang.code}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                changeLanguages(lang.code);
                                            }}
                                            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-200 text-sm hover:scale-105 active:scale-95 ${language === lang.code
                                                ? 'bg-blue-500/30 text-white border border-blue-400/30 shadow-lg'
                                                : 'bg-white/5 hover:bg-white/10 text-white/80 border border-transparent'
                                                }`}
                                            style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                                        >
                                            <span className="text-lg transition-transform hover:scale-125">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                            {language === lang.code && (
                                                <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Indicateur de drag */}
                            <div className="flex justify-center pt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                                <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Animations CSS améliorées */}
            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.4s ease-out forwards;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
        </>
    );
};

export default Widget;