import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-900 mt-12 transition-colors">
      <div className="px-4 py-10">
        {/* Newsletter Section */}
        <div className="mb-10 text-center">
          <h4 className="uppercase tracking-widest text-sm mb-3 dark:text-white">Newsletter</h4>
          <p className="text-xs text-gray-600 dark:text-gray-500 mb-5 px-4">
            Suscríbete para recibir las últimas novedades
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Introduce tu email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-800 dark:bg-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 uppercase tracking-widest text-xs active:bg-gray-800 dark:active:bg-gray-200 transition-colors">
              Enviar
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h5 className="uppercase tracking-widest mb-3 text-xs dark:text-white">Ayuda</h5>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-500">
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Pedidos</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Envío</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Devoluciones</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase tracking-widest mb-3 text-xs dark:text-white">Empresa</h5>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-500">
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Tiendas</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Empleo</a></li>
              <li><a href="#" className="active:text-black dark:active:text-white transition-colors">Sostenibilidad</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-8 text-center">
          <h5 className="uppercase tracking-widest mb-4 text-xs dark:text-white">Síguenos</h5>
          <div className="flex justify-center gap-6">
            <a href="#" className="active:opacity-60 transition-opacity dark:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="active:opacity-60 transition-opacity dark:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="active:opacity-60 transition-opacity dark:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="active:opacity-60 transition-opacity dark:text-white">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-900 text-center space-y-3">
          <div className="flex items-center justify-center gap-3 text-xs text-gray-600 dark:text-gray-600">
            <span>España</span>
            <span>·</span>
            <span>EUR €</span>
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-700">© 2025 Fashion Store</p>
        </div>
      </div>
    </footer>
  );
}
