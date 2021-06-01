import { useState } from 'react';

import SearchForm from '../SearchForm';

function Tools() {
    const [toogleProfile, setToogleProfile] = useState(false);

    return (
        <div className="flex lg:space-x-10">
            <div className="hidden lg:w-1/2 lg:block">
                <SearchForm />
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-between">
                    <div className="lg:hidden">
                        <a
                            href="#!"
                            className="flex justify-center items-center w-10 h-10 rounded-xl bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8 text-green-500">
                                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                        </a>
                    </div>

                    <div className="h-10 hidden lg:flex items-center space-x-6 font-semibold">
                        <a href="#!" className="hover:text-green-500">
                            Feedback
                        </a>
                        <a href="#!" className="hover:text-green-500">
                            Contacts
                        </a>
                        <a href="#!" className="hover:text-green-500">
                            Help
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a
                            href="#!"
                            className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-gray-700 relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>

                            <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border border-white"></div>
                        </a>

                        <div className="lg:relative">
                            <button
                                onClick={() => setToogleProfile(!toogleProfile)}
                                className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-white">
                                <img
                                    src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                                    alt=""
                                    className="w-10 h-10 object-cover"
                                />
                            </button>

                            <transition
                                enter-active-class="transition ease-out duration-100 transform"
                                enter-from-class="opacity-0 scale-95"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75 transform"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-95">
                                <div
                                    className={`absolute right-0 z-40 mt-2 w-full lg:w-48 ${
                                        toogleProfile ? '' : 'hidden'
                                    }`}>
                                    <div className="bg-white mx-4 lg:mx-0 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                                        <div className="lg:hidden p-3">
                                            <SearchForm />
                                        </div>

                                        <div className="lg:hidden border-b">
                                            <a
                                                href="#!"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Feedback
                                            </a>
                                            <a
                                                href="#!"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Contacts
                                            </a>
                                            <a
                                                href="#!"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Help
                                            </a>
                                        </div>

                                        <a
                                            href="#!"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Profile
                                        </a>
                                        <a
                                            href="#!"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </a>
                                        <a
                                            href="#!"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Log out
                                        </a>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;
