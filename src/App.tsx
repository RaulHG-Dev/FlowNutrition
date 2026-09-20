import { useEffect, useState } from 'react'

const navItems = ['Inicio', 'Metodología', 'Especialidades', 'Preguntas Frecuentes']

const metrics = [
    { value: '98.4%', label: 'Adherencia médica', icon: 'monitor_heart' },
    { value: '12+', label: 'Biomarcadores clave', icon: 'bloodtype' },
    { value: '1,240+', label: 'En lista prioritaria', icon: 'group' },
]

const pillars = [
    {
        id: '01',
        icon: 'chips',
        title: 'Bioquímica & Análisis Clínico',
        text: 'Interpretación rigurosa de analíticas sanguíneas completas, perfil lipídico avanzado, glucosa continua y sensibilidades digestivas para calibrar cada macronutriente de forma milimétrica.',
        badge: 'Diagnóstico de Base',
        badge2: 'Sin estimaciones a ciegas',
    },
    {
        id: '02',
        icon: 'vital_signs',
        title: 'Monitoreo Clínico Continuo',
        text: 'Canal directo y seguro con tu especialista titular para ajustes en tiempo real, resolución de dudas farmacológicas o sintomáticas y control estrecho de tu evolución semana tras semana.',
        badge: 'Chat Médico 24/7',
        badge2: 'Respuesta < 2h',
    },
    {
        id: '03',
        icon: 'restaurant_menu',
        title: 'Hábitos Sostenibles sin Restricción',
        text: 'Planes alimenticios diseñados para la vida real: recetarios rápidos de 20 minutos, flexibilidad para viajes de negocios o eventos sociales, y cero prohibiciones extremas que generen rebote.',
        badge: 'Sin Efecto Rebote',
        badge2: 'Sostenible 365 días',
    },
]

const specialties = [
    { icon: 'metabolism', label: 'Salud Metabólica', text: 'Resistencia a insulina, SOP, tiroides y esteatosis.' },
    { icon: 'nutrition', label: 'Microbiota & Digestivo', text: 'SIBO, permeabilidad intestinal, SII y celiaquía.' },
    { icon: 'cardiology', label: 'Riesgo Cardiovascular', text: 'ApoB, colesterol LDL-c, hipertensión y aterosclerosis.' },
    { icon: 'fitness_center', label: 'Medicina del Ejercicio', text: 'Composición corporal, hipertrofia y masa magra.' },
]

function App() {
    const [days, setDays] = useState(18)
    const [hours, setHours] = useState(8)
    const [minutes, setMinutes] = useState(45)
    const [seconds, setSeconds] = useState(15)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const interval = window.setInterval(() => {
            setSeconds((current) => {
                if (current > 0) return current - 1
                setMinutes((prevMinutes) => {
                    if (prevMinutes > 0) return prevMinutes - 1
                    setHours((prevHours) => {
                        if (prevHours > 0) return prevHours - 1
                        setDays((prevDays) => (prevDays > 0 ? prevDays - 1 : 0))
                        return 23
                    })
                    return 59
                })
                return 59
            })
        }, 1000)

        return () => window.clearInterval(interval)
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
            <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-10 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            alt="FlowNutrition logo"
                            className="h-8 w-auto object-contain"
                            src="https://lh3.googleusercontent.com/aida/AEtjO1UwyVQoEFsIhtFJt0aqZQUA-pnYh1AdXopqWxL5Ogb6O4498qFEh6aggoirTcXJDizGiu9YKfqj_VveiWC4nk9PjSu78xBznefZu00LqEThrGwfqG7HMB9HfNejUWNoY_K_JhadaVkpwtUtMHaxcdCOCA2IG3USiGla6dC-ux8xueWukMOQhTncPwih41otv8seFjQ6WBSwPN5VjpSrzSNK9ylzOzOB0k6W3CYru2MN0lij72bXmcJC59g"
                        />
                        <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">FlowNutrition</span>
                            <span className="font-label-sm text-label-sm text-primary tracking-wide leading-none mt-1">Nutrición Clínica</span>
                        </div>
                        <div className="hidden xl:inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md ml-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Apertura Oficial 2025
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-surface-container-low">
                        {navItems.map((item, index) => (
                            <a
                                key={item}
                                href="#"
                                className={`px-4 py-2 rounded-full transition-all ${index === 0
                                    ? 'bg-surface-container text-primary font-title-md'
                                    : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_4px_20px_-2px_rgba(22,163,74,0.15)] hover:bg-primary-container transition-all">
                            Solicitar Acceso Prioritario
                        </a>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="w-full pt-20 flex-1 bg-surface">
                <div className="flex flex-col w-full">
                    <div className="relative w-full overflow-hidden">
                        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[980px] h-[340px] bg-gradient-to-b from-primary-fixed/25 via-secondary-container/20 to-transparent blur-3xl pointer-events-none -z-10" />

                        <section className="max-w-[1280px] mx-auto px-4 md:px-10 pt-10 pb-16 lg:pb-24 w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-4">
                                    <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                                        <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold text-primary">Ciencia • Medicina • Bienestar Integral</span>
                                    </div>

                                    <div className="space-y-3">
                                        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                                            La nueva referencia en <span className="text-primary">nutrición clínica</span> y medicina preventiva
                                        </h1>
                                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                                            Protocolos de alimentación 100% individualizados basados en bioquímica, evidencia científica de vanguardia y acompañamiento médico cercano.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                                            <span className="font-label-lg text-label-lg">Especialistas Titulados</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">chips</span>
                                            <span className="font-label-lg text-label-lg">100% Basado en Evidencia</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
                                            <span className="material-symbols-outlined text-primary text-[18px]">stethoscope</span>
                                            <span className="font-label-lg text-label-lg">Soporte Médico Continuo</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-4">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex items-center gap-2.5">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                                                </span>
                                                <span className="font-title-md text-title-md text-on-surface">Apertura Oficial de Convocatoria</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                                                <span className="material-symbols-outlined text-sm">lock_clock</span> Fase Exclusiva 2025
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-4 gap-3 text-center">
                                            {[
                                                { label: 'Días', value: days, accent: 'text-primary' },
                                                { label: 'Horas', value: hours },
                                                { label: 'Minutos', value: minutes },
                                                { label: 'Segundos', value: seconds, accent: 'text-primary' },
                                            ].map((item) => (
                                                <div key={item.label} className="p-3.5 rounded-lg bg-surface-container-low flex flex-col items-center">
                                                    <span className={`font-display-lg text-display-lg leading-tight ${item.accent || 'text-on-surface'} font-bold`}>
                                                        {String(item.value).padStart(2, '0')}
                                                    </span>
                                                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">{item.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                                            <span className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                                                Horario Central Clínico (GMT-5 / Madrid CET)
                                            </span>
                                            <span className="font-semibold text-primary">Cupos asignados por orden de solicitud</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        {metrics.map((metric) => (
                                            <div key={metric.label} className="p-4 rounded-xl bg-surface-container-low flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                                                    <span className="material-symbols-outlined text-[20px]">{metric.icon}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">{metric.value}</span>
                                                    <span className="font-label-sm text-label-sm text-on-surface-variant">{metric.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-5 flex flex-col gap-6">
                                    <div className="p-6 md:p-8 rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-5 relative">
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                                                <span className="material-symbols-outlined text-sm">notifications_active</span> ACCESO PREFERENTE DE APERTURA
                                            </span>
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Fase 1</span>
                                        </div>

                                        <div>
                                            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                                                Asegura tu valoración inicial prioritaria
                                            </h2>
                                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                                                Regístrate para recibir invitación anticipada a la plataforma antes de la convocatoria pública general con plaza asignada con médico colegiado.
                                            </p>
                                        </div>

                                        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="font-label-md text-label-md text-on-surface" htmlFor="lead-fullname">Nombre y Apellidos</label>
                                                <div className="relative flex items-center">
                                                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">badge</span>
                                                    <input id="lead-fullname" required type="text" placeholder="Ej. Dra. Elena Morales" className="w-full pl-11 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label className="font-label-md text-label-md text-on-surface" htmlFor="lead-email">Correo Electrónico Médico o Personal</label>
                                                <div className="relative flex items-center">
                                                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">mail</span>
                                                    <input id="lead-email" required type="email" placeholder="elena.morales@hospital.org" className="w-full pl-11 pr-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label className="font-label-md text-label-md text-on-surface" htmlFor="lead-interest">Área de Interés Principal</label>
                                                <div className="relative flex items-center">
                                                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">clinical_notes</span>
                                                    <select id="lead-interest" className="w-full pl-11 pr-8 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container appearance-none cursor-pointer">
                                                        <option>Salud Metabólica & Resistencia a Insulina</option>
                                                        <option>Nutrición Clínica Digestiva & Microbiota</option>
                                                        <option>Nutrición Oncológica & Acompañamiento</option>
                                                        <option>Rendimiento Deportivo & Composición Corporal</option>
                                                        <option>Optimización General y Longevidad</option>
                                                    </select>
                                                    <span className="material-symbols-outlined absolute right-3 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                                                </div>
                                            </div>

                                            <button type="submit" className={`w-full mt-2 py-3.5 px-6 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 ${submitted ? 'opacity-50 pointer-events-none' : ''}`}>
                                                <span>{submitted ? 'Solicitud Confirmada' : 'Solicitar invitación prioritaria'}</span>
                                                <span className="material-symbols-outlined text-[18px]">{submitted ? 'check' : 'arrow_forward'}</span>
                                            </button>

                                            {submitted && (
                                                <div className="p-3 rounded-lg bg-secondary-container text-on-secondary-container font-body-sm text-body-sm text-center">
                                                    ¡Solicitud recibida! Te hemos reservado plaza preferente de apertura.
                                                </div>
                                            )}
                                        </form>

                                        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-surface-container-low">
                                            <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                                                <strong className="text-on-surface">Consulta diagnóstica sin costo</strong> incluida con la primera sesión. Tus datos están rigurosamente protegidos bajo secreto médico y GDPR. Cero spam publicitario.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative rounded-xl overflow-hidden shadow-sm bg-surface-container group">
                                        <img
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRomzqjKRrNthmMnLUKUAp9GXoDIfANbjdFua0oKCYI-j9c50WwiJ9OmkVxXfD7RUI2iKYoZRwhWqMTHlxRC5FnZvkWmbvntHpGn1OzTUIBE3LDb29dM3DdLpq4SvEV_x1Gi4ClzvBsKY5cervIZp7dpUVvS-l0uBUEz_eQko2LoAQR1kXMuMrPGwBssyfANqOAzHJf47Tge4T24_C293X-Zh8V_mHwgM77C8e2QSwJotrifYshelL"
                                            alt="Nutrición clínica"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/30 to-transparent p-4 flex flex-col justify-end">
                                            <div className="flex flex-wrap gap-2 mb-1.5">
                                                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm">Planes antiinflamatorios & metabólicos</span>
                                                <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Supervisión 1-a-1</span>
                                            </div>
                                            <p className="text-on-primary font-body-sm text-body-sm font-medium">
                                                Abordaje clínico de alta precisión diseñado por nutricionistas titulados y médicos especialistas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="w-full bg-surface-container-low py-16 lg:py-24">
                        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase font-semibold">
                                        <span className="material-symbols-outlined text-[16px]">science</span>
                                        Metodología FlowNutrition
                                    </div>
                                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Tres pilares clínicos de precisión</h2>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                                    Un modelo de atención que reemplaza las dietas restrictivas y genéricas por medicina metabólica personalizada.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pillars.map((pillar) => (
                                    <div key={pillar.id} className="p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
                                        <div className="flex flex-col gap-5">
                                            <div className="flex items-center justify-between">
                                                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                                    <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                                                </div>
                                                <span className="font-display-lg text-display-lg text-outline-variant/40 font-bold">{pillar.id}</span>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="font-headline-sm text-headline-sm text-on-surface">{pillar.title}</h3>
                                                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{pillar.text}</p>
                                            </div>
                                        </div>

                                        <div className="pt-6 mt-6 bg-surface-container-low p-3.5 rounded-lg flex items-center justify-between">
                                            <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> {pillar.badge}
                                            </span>
                                            <span className="font-label-sm text-label-sm text-primary font-bold">{pillar.badge2}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[24px]">analytics</span>
                                    </div>
                                    <div>
                                        <h4 className="font-title-md text-title-md text-on-surface">Resultados de Ensayos Piloto Fase Previa</h4>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant">Evaluación clínica en 450 pacientes con seguimiento a 6 meses.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 w-full md:w-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 relative flex items-center justify-center">
                                            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                                                <circle className="stroke-surface-container" cx="18" cy="18" r="15.915" strokeWidth="3.5" fill="none" />
                                                <circle className="stroke-primary" cx="18" cy="18" r="15.915" strokeWidth="3.5" strokeDasharray="87, 100" strokeLinecap="round" fill="none" />
                                            </svg>
                                            <span className="absolute font-label-md text-label-md font-bold text-on-surface">87%</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-label-md text-label-md font-semibold text-on-surface">Glucemia Normalizada</span>
                                            <span className="font-label-sm text-label-sm text-on-surface-variant">HbA1c &lt; 5.7%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 relative flex items-center justify-center">
                                            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                                                <circle className="stroke-surface-container" cx="18" cy="18" r="15.915" strokeWidth="3.5" fill="none" />
                                                <circle className="stroke-secondary" cx="18" cy="18" r="15.915" strokeWidth="3.5" strokeDasharray="92, 100" strokeLinecap="round" fill="none" />
                                            </svg>
                                            <span className="absolute font-label-md text-label-md font-bold text-on-surface">92%</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-label-md text-label-md font-semibold text-on-surface">Remisión Digestiva</span>
                                            <span className="font-label-sm text-label-sm text-on-surface-variant">Alivio de SIBO / SII</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 w-full">
                        <div className="p-8 md:p-10 rounded-2xl bg-surface-container-high relative overflow-hidden shadow-sm">
                            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                                <div className="lg:col-span-8 flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md">
                                        <span className="material-symbols-outlined text-[32px]">emergency</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                                            <span className="material-symbols-outlined text-[14px]">priority_high</span> Atención Temprana Prioritaria
                                        </div>
                                        <h3 className="font-headline-md text-headline-md text-on-surface">
                                            ¿Cuentas con prescripción médica previa o un caso clínico urgente?
                                        </h3>
                                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                                            Si cuentas con un diagnóstico reciente de diabetes descompensada, oncología, patología digestiva inflamatoria aguda o indicación de especialista externo, nuestro equipo clínico de guardia te coordinará un ingreso prioritario sin esperar la apertura general.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                                    <a href="https://wa.me/34900000000?text=Consulta%20Clinica%20Prioritaria%20FlowNutrition" target="_blank" rel="noreferrer" className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all">
                                        <span className="material-symbols-outlined text-[20px]">chat</span>
                                        <span>Contactar Guardia Clínica</span>
                                    </a>
                                    <a href="mailto:guardia@FlowNutrition-clinica.com?subject=Caso%20Clinico%20Urgente%20FlowNutrition" className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-all">
                                        <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
                                        <span>Enviar Informe Médico</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-[1280px] mx-auto px-4 md:px-10 pb-16 w-full">
                        <div className="text-center max-w-xl mx-auto mb-8">
                            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Abordaje Especializado</span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Especialidades que integrarán la plataforma de apertura</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {specialties.map((specialty) => (
                                <div key={specialty.label} className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center gap-2.5">
                                    <span className="material-symbols-outlined text-primary text-[32px]">{specialty.icon}</span>
                                    <span className="font-title-md text-title-md text-on-surface">{specialty.label}</span>
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">{specialty.text}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="w-full bg-surface-container-low mt-auto">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6">
                        <div className="lg:col-span-4 flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-sm">spa</span></div>
                                <span className="font-headline-sm text-headline-sm text-on-surface">FlowNutrition</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                                Plataforma médica de soporte clínico nutricional, salud metabólica de precisión y dietoterapia respaldada por evidencia científica rigurosa.
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm"><span className="material-symbols-outlined text-sm">verified</span> Registro Sanitario V-2025</span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm"><span className="material-symbols-outlined text-sm">health_and_safety</span> Certificado ISO-27799</span>
                            </div>
                        </div>

                        <div className="lg:col-span-3 flex flex-col gap-1">
                            <h4 className="font-title-md text-title-md text-on-surface mb-2">Áreas Médicas</h4>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Metabolismo y Resistencia a Insulina</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Nutrición Clínica Oncológica</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Salud Digestiva y Microbiota</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Nutrición Deportiva Avanzada</a>
                        </div>

                        <div className="lg:col-span-2 flex flex-col gap-1">
                            <h4 className="font-title-md text-title-md text-on-surface mb-2">Plataforma</h4>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Metodología Clínica</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Comité Científico</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Preguntas Frecuentes</a>
                            <a href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Descargo Médico</a>
                        </div>

                        <div className="lg:col-span-3 flex flex-col gap-1">
                            <h4 className="font-title-md text-title-md text-on-surface mb-2">Canales Oficiales</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Atención coordinada por profesionales de la salud colegiados.</p>
                            <div className="flex items-center gap-2">
                                <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"><span className="material-symbols-outlined text-sm">mail</span></a>
                                <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"><span className="material-symbols-outlined text-sm">call</span></a>
                                <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"><span className="material-symbols-outlined text-sm">share</span></a>
                                <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"><span className="material-symbols-outlined text-sm">forum</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 FlowNutrition Nutrición Clínica S.L. Todos los derechos reservados.</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Política de Privacidad</a>
                            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Términos de Servicio</a>
                            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Aviso y Descargo Médico</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
