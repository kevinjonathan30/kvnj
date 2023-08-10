export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="text-center p-5">
            <p className="py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto">
                Kevin Jonathan © 2018 - {year}. All rights reserved.
            </p>
        </footer>
    );
}