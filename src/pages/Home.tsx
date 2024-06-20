'use client';
import Link from "next/link";
import React from "react";
import { isMobile } from "react-device-detect";
import { Solutions } from "@/ui/components/Solutions";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ParticlesComponent from "@/ui/components/Partials";


function InformationMobile() {
    return (
        <section className="flex flex-col w-full gap-4 py-5 !px-4 bg-custom-bg-second">
            <h2 className="text-white text-lg font-medium">
                Mais Informações e Menos Dúvidas
            </h2>
            <div className="flex max-[768px]:-screen max-[768px]:mx-[-1rem]">
                <Swiper slidesPerView={1.3} spaceBetween={10}>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full rounded-lg">
                            <h3 className="text-white text-base font-semibold">
                                Identifique
                                Tendências
                            </h3>
                            <p className="text-white text-sm">
                                Identifique padrões ocultos nos dados. Essas informações permitem que você antecipe demandas, otimize processos e adote estratégias baseadas em  consultoria e análise de dados para tomar decisões eficazes tornando-se em uma empresa de análise de dados.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full rounded-lg">
                            <h3 className="text-white text-base font-semibold">
                                Cresça sua empresa
                            </h3>
                            <p className="text-white text-sm">
                                Identifique os melhores caminhos e estratégias através da consultoria em análise de dados, para crescer a sua empresa, por meio dos dados apresentados em um
                                Dashboard Empresarial.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full rounded-lg">
                            <h3 className="text-white text-base font-semibold">
                                Automatize e Monitore
                            </h3>
                            <p className="text-white text-sm">
                                Entregamos automações de relatórios e processos repetitivos, além de fornecer monitoramento em tempo real da sua operação.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full rounded-lg">
                            <h3 className="text-white text-base font-semibold">
                                Organize e Planeje
                            </h3>
                            <p className="text-white text-sm">
                                Tenha em suas mãos todos os dados visualmente organizados, prontos para você planejar os próximos passos, com a consultoria data analytics.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full rounded-lg">
                            <h3 className="text-white text-base font-semibold">
                                Tomada de Decisões Inteligentes
                            </h3>
                            <p className="text-white text-sm">
                                Acesse seus Dashboards personalizados que trazem dados reais para tornar sua tomada de decisão precisa e eficaz.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

function InformationDesktop() {
    return (
        <section className="flex flex-col gap-4 py-6 px-32 bg-custom-bg-second">
            <h2 className="text-white text-lg font-medium">
                Mais Informações e Menos Dúvidas
            </h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full">
                    <h3 className="text-white text-base font-semibold">
                        Identifique
                        Tendências
                    </h3>
                    <p className="text-white text-sm">
                        Identifique padrões ocultos nos dados. Essas informações permitem que você antecipe demandas, otimize processos e adote estratégias baseadas em  consultoria e análise de dados para tomar decisões eficazes tornando-se em uma empresa de análise de dados.
                    </p>
                </div>


                <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full">
                    <h3 className="text-white text-base font-semibold">
                        Cresça sua empresa
                    </h3>
                    <p className="text-white text-sm">
                        Identifique os melhores caminhos e estratégias através da consultoria em análise de dados, para crescer a sua empresa, por meio dos dados apresentados em um
                        Dashboard Empresarial.
                    </p>
                </div>


                <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full">
                    <h3 className="text-white text-base font-semibold">
                        Automatize e Monitore
                    </h3>
                    <p className="text-white text-sm">
                        Entregamos automações de relatórios e processos repetitivos, além de fornecer monitoramento em tempo real da sua operação.
                    </p>
                </div>


                <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full">
                    <h3 className="text-white text-base font-semibold">
                        Organize e Planeje
                    </h3>
                    <p className="text-white text-sm">
                        Tenha em suas mãos todos os dados visualmente organizados, prontos para você planejar os próximos passos, com a consultoria data analytics.
                    </p>
                </div>


                <div className="flex flex-col gap-2 p-3 bg-custom-bg h-full">
                    <h3 className="text-white text-base font-semibold">
                        Tomada de Decisões Inteligentes
                    </h3>
                    <p className="text-white text-sm">
                        Acesse seus Dashboards personalizados que trazem dados reais para tornar sua tomada de decisão precisa e eficaz.
                    </p>
                </div>
            </div>
        </section>
    )
}

function HighlightMobile() {
    return (
        <section className="flex gap-4 py-5 px-4">
            <div className="flex max-[768px]:w-screen max-[768px]:mx-[-1rem]">
                <Swiper slidesPerView={1.3} spaceBetween={10}>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 p-3 h-full">
                            <h3 className="text-white text-base font-semibold">
                                Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                            </h3>
                            <ul className="flex flex-col">
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Mais agilidades
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Redução de Custos
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                                    <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                    </svg>
                                </span>
                                    Eficiência Operacional
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Extração de dados de +200 sistemas
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                                Fale com um Consultor
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 p-3 h-full">
                            <h3 className="text-white text-base font-semibold">
                                Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                            </h3>
                            <ul className="flex flex-col">
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Mais agilidades
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Redução de Custos
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                                    <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                    </svg>
                                </span>
                                    Eficiência Operacional
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Extração de dados de +200 sistemas
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                                Fale com um Consultor
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 p-3 h-full">
                            <h3 className="text-white text-base font-semibold">
                                Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                            </h3>
                            <ul className="flex flex-col">
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Mais agilidades
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Redução de Custos
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                                    <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                    </svg>
                                </span>
                                    Eficiência Operacional
                                </li>
                                <li className="flex flex-row items-center gap-2 text-xs text-white">
                                    <span>
                                        <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                        </svg>
                                    </span>
                                    Extração de dados de +200 sistemas
                                </li>
                            </ul>
                            <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                                Fale com um Consultor
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

function HighlightDesktop() {
    return (
        <section className="flex gap-4 py-6 px-32">
            <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col gap-3 p-3 h-full">
                    <h3 className="text-white text-base font-semibold">
                        Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                    </h3>
                    <ul className="flex flex-col">
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Mais agilidades
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Redução de Custos
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                            <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                            </svg>
                        </span>
                            Eficiência Operacional
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Extração de dados de +200 sistemas
                        </li>
                    </ul>
                    <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                        Fale com um Consultor
                    </a>
                </div>

                <div className="flex flex-col gap-3 p-3 h-full">
                    <h3 className="text-white text-base font-semibold">
                        Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                    </h3>
                    <ul className="flex flex-col">
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Mais agilidades
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Redução de Custos
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                            <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                            </svg>
                        </span>
                            Eficiência Operacional
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Extração de dados de +200 sistemas
                        </li>
                    </ul>
                    <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                        Fale com um Consultor
                    </a>
                </div>

                <div className="flex flex-col gap-3 p-3 h-full">
                    <h3 className="text-white text-base font-semibold">
                        Entregamos o que você precisa em uma <strong>consultoria de Power BI!</strong>
                    </h3>
                    <ul className="flex flex-col">
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Mais agilidades
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Redução de Custos
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">                                        <span>
                            <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                            </svg>
                        </span>
                            Eficiência Operacional
                        </li>
                        <li className="flex flex-row items-center gap-2 text-xs text-white">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.84457 0.549163C1.53571 0.284413 1.10098 0.223703 0.7314 0.393683C0.36181 0.563673 0.125 0.933243 0.125 1.34004V13.84C0.125 14.2468 0.36181 14.6164 0.7314 14.7864C1.10098 14.9564 1.53571 14.8957 1.84457 14.631L9.1362 8.38099C9.3671 8.18309 9.5 7.89409 9.5 7.58999C9.5 7.28599 9.3671 6.99699 9.1362 6.79919L1.84457 0.549163ZM6.85772 7.58999L2.20833 11.5752V3.60485L6.85772 7.58999ZM12.2612 0.549163C11.9524 0.284413 11.5176 0.223703 11.148 0.393683C10.7784 0.563673 10.5417 0.933243 10.5417 1.34004V13.84C10.5417 14.2468 10.7784 14.6164 11.148 14.7864C11.5176 14.9564 11.9524 14.8957 12.2612 14.631L19.5529 8.38099C19.7838 8.18309 19.9167 7.89409 19.9167 7.58999C19.9167 7.28599 19.7838 6.99699 19.5529 6.79919L12.2612 0.549163ZM17.2744 7.58999L12.625 11.5752V3.60485L17.2744 7.58999Z" fill="white" />
                                </svg>
                            </span>
                            Extração de dados de +200 sistemas
                        </li>
                    </ul>
                    <a href="#" className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                        Fale com um Consultor
                    </a>
                </div>
            </div>
        </section>
    )
}

export default function Home() {

    return (
        <>
            <main className="flex flex-col pt-[5.375rem]">
                <div className="flex w-full h-[25.5rem] relative">
                    <ParticlesComponent />

                    <section className="flex flex-col gap-4 max-[768px]:px-4 max-[768px]:py-5 py-6 px-32 absolute">
                        <h1 className="text-white text-xl">
                            <span className="text-custom-blue">Transforme dúvidas em decisões bem-sucedidas</span> para alavancar o seu negócio.
                        </h1>
                        <p className="text-white text-sm">
                            Com experiência em todo o ecossistema da área de dados, conseguimos tranformar os seus dados em informações claras, acessíveis e confiáveis para tomada de decisões certeiras em um ambiente de negócios complexo.
                        </p>
                        {/* <Link href='#' className="text-white bg-custom-blue px-4 py-2 flex w-fit text-sm">
                            Falar com um especialista
                        </Link> */}
                    </section>
                </div>
                {isMobile ? <InformationMobile /> : <InformationDesktop />}

                {isMobile ? <HighlightMobile /> : <HighlightDesktop />}

                <section 
                    className="flex flex-col gap-4 max-[768px]:px-4 max-[768px]:py-5 py-6 px-32 bg-custom-bg-second border-t-4 border-[color:#1c242d] rounded-t-lg">
                    <h2 className="text-white text-lg font-medium">
                        Nossos serviços
                    </h2>
                    <Solutions />
                </section>

                <section className="flex max-[768px]:px-4 max-[768px]:py-5 py-6 px-32">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-custom-blue text-lg font-medium">
                            Quer tomar desições com base em dados?
                        </h2>

                        <p className="text-white text-sm">
                            Preencha o formulário para entendermos melhor sobre o seu negócio e desenhar a solução ideal para lhe atender.
                        </p>

                        <Link href='#' className="text-custom-bg bg-custom-blue px-4 py-2 flex w-fit text-sm">
                            Entre em contato
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
