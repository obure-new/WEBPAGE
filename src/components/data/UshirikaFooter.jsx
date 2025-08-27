import { Home, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"; 

const UshirikaFooter = () => {
  return (
    <div className="relative">
      {/* Corner LEFT IMSGE */}
      <div className="absolute bottom-0 left-0 z-10">
        <img 
          src="https://ushirikagardens.cic.co.ke/wp-content/uploads/2023/12/ug_footer_right.webp" 
          alt="Decorative element"
          className="w-32 h-32 object-cover"
        />
      </div>

      <footer id="contact" className="bg-red-600 text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ushirika Gardens</h3>
                  <p className="text-red-200 text-sm">A dream worth having.</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-red-100 text-sm">CIC Plaza, Mara Road, Upperhill Nairobi, Kenya.</p>
                <p className="text-red-100 text-sm">Ushirika Gardens, Off the Ruiru - Kamiti Rd</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span className="text-red-100">sales@ushirikagardens.cic.co.ke</span>
                </div>
                <div className="flex items-center space-x-2 text-xl font-bold text-yellow-400">
                  <Phone className="w-5 h-5" />
                  <span>0717 100 100</span>
                </div>
              </div>
            </div>
            
            {/* SOCIAL Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Useful Links</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">FAQs</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">Google Map to Site</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors text-sm">Download our Brochure</a></li>
              </ul>
            </div>
            
           {/* Social Media Icons */}
            <div>
            <h4 className="font-bold mb-4 text-lg text-white">Stay in the loop</h4>
            <div className="flex flex-wrap gap-3">
                {/* Twitter/X */}
                <a
                href="#"
                className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center 
                hover:bg-red-700 hover:text-white transition-all duration-300 
                shadow-sm border border-gray-300"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                </a>

                {/* Facebook */}
                <a
                href="#"
                className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center 
                hover:bg-red-700 hover:text-white transition-all duration-300 
                shadow-sm border border-gray-300"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                </a>

                {/* LinkedIn */}
                <a
                href="#"
                className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center 
                hover:bg-red-700 hover:text-white transition-all duration-300 
                shadow-sm border border-gray-300"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
                </a>

                {/* YouTube */}
                <a
                href="#"
                className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center 
                hover:bg-red-700 hover:text-white transition-all duration-300 
                shadow-sm border border-gray-300"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                </a>

                {/* Instagram */}
                <a
                href="#"
                className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center 
                hover:bg-green-700 hover:text-white transition-all duration-300 
                shadow-sm border border-gray-300"
                >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                </a>
            </div>
            </div>


            
            {/* CIC Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex items-center justify-center">
                <img 
                  src="https://cdn.brandfetch.io/idqET1HYHr/w/322/h/270/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1753222672607" 
                  alt="CIC Group Logo"
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-red-500 mt-8 pt-6 text-center">
            <p className="text-red-100 text-sm">Copyright 2023 © Ushirika Gardens. All rights reserved by CIC Group</p>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/254717100100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426"/>
            </svg>
            <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Chat with us</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default UshirikaFooter;