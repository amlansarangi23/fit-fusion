const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="py-5 mx-auto max-w-screen-xl text-center">
                <a href="#" className="flex justify-center gap-5 items-center text-1xl font-semibold text-gray-900 dark:text-white"><img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/gymnastics.png" alt="gymnastics"/>
                    Fit Fusion
                </a>
                <ul className="flex flex-wrap justify-center items-center my-6 text-gray-900 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <a href="#" className="hover:underline">Amlan Sarangi</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
