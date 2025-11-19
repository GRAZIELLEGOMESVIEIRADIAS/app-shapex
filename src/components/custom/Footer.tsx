"use client";

import { Instagram, Twitter, Youtube, Mail, Shield, Lock } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-neon opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black gradient-neon-text mb-4">
              {APP_NAME}
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A primeira IA fitness brasileira que transforma teu celular num personal trainer + nutricionista digital.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Produto */}
          <div>
            <h4 className="text-lg font-black text-gray-100 mb-4">Produto</h4>
            <ul className="space-y-3">
              {["Como Funciona", "Planos", "Para Academias", "Afiliados"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Suporte */}
          <div>
            <h4 className="text-lg font-black text-gray-100 mb-4">Suporte</h4>
            <ul className="space-y-3">
              {["Central de Ajuda", "Contato", "Status", "Blog"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Shield className="w-4 h-4 text-neon-cyan" />
            <span>Dados Criptografados</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Lock className="w-4 h-4 text-neon-cyan" />
            <span>Privacidade Garantida</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4 text-neon-cyan" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>LGPD Compliant</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>
            © 2024 {APP_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-neon-cyan transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-neon-cyan transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-gray-900/30 border border-gray-800">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            <strong className="text-gray-400">Aviso Legal:</strong> As informações fornecidas pela ShapeX são baseadas em inteligência artificial e não substituem orientação profissional de médicos, nutricionistas ou educadores físicos. Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios ou dieta.
          </p>
        </div>
      </div>
    </footer>
  );
}
