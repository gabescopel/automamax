'use-client';

import React, { useEffect, useState } from "react";
import { ISolutions } from "@/data/types/types";
import clsx from "clsx";

const baseSolutions = [
    {
        title: 'Engenharia de Dados',
        subtitle: 'Nosso serviço de engenharia de dados ajuda o seu negócio nos processos de:',
        items: [
            'Estruturação dos processos de extração, transformação e carregamento de dados (ETL)',
            'Arquitetura de dados e sistemas',
            'Treinamento e capacitação dos colaboradores',
            'Estruturação do seu Data Warehouse utilizando as melhores ferramentas do mercado como: DBT, Apache Airflow, Google Cloud Platform e AWS'
        ]
    },
    {
        title: 'Business Intelligence',
        subtitle: 'Nosso serviço de business intelligence ajuda o seu negócio nos processos de:',
        items: [
            'Estruturação dos processos de coleta, organização e análise de dados personalizado conforme as regras de negócios da sua empresa',
            'Desenvolvimento de dashboards e relatórios interativos para tomada de decisão',
            'Implementação de ferramentas de visualização de dados como Power BI',
            'Análise de dados em tempo real para insights e estratégias de negócio',
            'Capacitação dos colaboradores na utilização das ferramentas de BI e na interpretação dos dados analíticos'
        ]
    },
    {
        title: 'Desenvolvimento Web',
        subtitle: 'Nosso serviço de web development ajuda o seu negócio nos processos de:',
        items: [
            'Desenvolvimento de websites e aplicações web responsivas e escaláveis',
            'Criação de interfaces de usuário (UI) intuitivas e experiências de usuário (UX) otimizadas',
            'Integração de sistemas e APIs para funcionalidade ampliada',
            'Desenvolvimento front-end utilizando as mais modernas tecnologias, como Next.JS, React.JS, Angular e Vue.js',
            'Desenvolvimento back-end com robustez e segurança, utilizando Node.js, Python, Ruby on Rails, entre outros',
            'Implementação de práticas de SEO (Search Engine Optimization) para melhorar a visibilidade e o ranking do seu site nos motores de busca',
            'Garantia de desempenho e tempo de resposta rápidos através de técnicas de otimização de performance',
            'Capacitação dos colaboradores na manutenção e atualização contínua das aplicações web'
        ]
    },
]

function DropDownSolution({ title, subtitle, items }: ISolutions) {
    const [showSolution, setShowSolution] = useState<Boolean>(false);

    useEffect(() => {
        console.log('show', showSolution)
    }, [showSolution])

    return (
        <li className="flex flex-col" onClick={() => setShowSolution(!showSolution)}>
            <p className="flex items-center justify-between  border-b border-[color:#1c242d] text-custom-lightgray p-2 w-full text-center">
                {title}
                {
                    showSolution ?
                        <span>
                            <svg fill="#979a9e" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                width="16px" height="16px" viewBox="0 0 400 400">
                                <g>
                                    <g>
                                        <path d="M199.991,0C89.715,0,0.002,89.72,0.002,200c0,110.279,89.713,200,199.989,200c110.281,0,200.007-89.721,200.007-200
    C399.998,89.72,310.272,0,199.991,0z M199.991,373.77c-95.81,0-173.759-77.953-173.759-173.77
    c0-95.817,77.949-173.77,173.759-173.77c95.821,0,173.775,77.953,173.775,173.77C373.768,295.816,295.812,373.77,199.991,373.77z"
                                        />
                                        <path d="M279.476,186.884l-158.958,0.003c-7.242,0-13.115,5.873-13.115,13.115c0,7.243,5.873,13.116,13.115,13.116l158.958-0.005
    c7.243,0,13.115-5.872,13.115-13.114S286.719,186.884,279.476,186.884z"/>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        :
                        <span>
                            <svg fill="#979a9e" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                            </svg>
                        </span>
                }
            </p>
            <div className={clsx(
                'flex-col gap-1 transition-opacity',
                {
                    'h-0 hidden': !showSolution,
                    'h-auto flex': showSolution,
                }
            )}>
            {/* <div className={`flex flex-col gap-1 transition-all ${showSolution ? 'h-0' : 'flex p-2 h-auto mt-2'}`}> */}
                <p className="text-white text-center text-base">
                    {subtitle}
                </p>
                <ul>
                    {items.map((el: string) => (
                        <li className="text-white text-sm list-disc">
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export function Solutions() {

    return (
        <ul className="flex flex-col gap-2">
            {
                baseSolutions.map((el) => (
                    <DropDownSolution title={el.title} subtitle={el.subtitle} items={el.items} />
                ))
            }
        </ul>
    )
}