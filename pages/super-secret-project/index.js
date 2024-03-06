import MainWrapper from '@/components/include/MainWrapper';
import Button from '@/components/include/Button';
import Image from 'next/image';
import zenbu from '@/public/images/Zenbu.jpg';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Kevin Jonathan | Acara Perpisahane Kevin</title>
                <meta name="description" content="Acara Perpisahane Kevin" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, archive" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainWrapper>
                <div className="grid md:grid-cols-2 gap-4 border-2 border-black dark:border-white p-10 my-10 bg-blue-200 dark:bg-gray-800 flex-1">
                    <div>
                        <Image
                            src={zenbu}
                            className="object-cover border-2 border-black dark:border-white"
                            alt={"Zenbu Pakuwon Mall"}
                            placeholder="blur"
                        />
                    </div>
                    <div>
                        <h2 className="font-gloriaHallelujah text-3xl py-2 text-blue-700 dark:text-blue-400 font-semibold tracking-wide  md:text-6xl">Acara Perpisahane Kevin</h2>
                        <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl">Critoe Areke Kape Lunga Nang Jepang</h3>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                            Sugeng rawuh ing acara pamit saka Kevin. Kita bareng-bareng nyambut pamitan kanggo sahabat sing bakal mudhun menyang Jepang. Acara bakal diadakan ing Zenbu Pakuwon Mall tanggal 24 Maret. Ayo padha padhani kagem Kevin, lan wujudake pamitan kanggo koncone kene sambil mangan-mangan.
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            <span className="font-bold">Panggonan:</span> Zenbu Pakuwon Mall.
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            <span className="font-bold">Tanggal:</span> 24 Maret 2024.
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            <span className="font-bold">Wektu:</span> Jam 11.00 (cekno panggonan parkire ora penuh).
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            <span className="font-bold">Info:</span> Reservasi rencanae ana ing jeneng "Kevin Jonathan". Di list nde grup sek yo cekno kula iso booking nang mall piro wong sing teko gawe meja e.
                        </p>
                        <div className="py-5">
                            <Button href={"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240324T040000Z%2F20240324T070000Z&details=Jok%20telat%20rek%20lek%20wis%20absen%21%0AMarie%20jam%2014.00%20rencanae%20bebas%20seh%20kape%20lapo%2C%20mbuh%20billiard%2C%20bord%20gim%2C%20sak%20karepe%20wis.&location=Zenbu%20Pakuwon%20Mall&text=Acara%20Perpisahane%20Kevin"}>Ilingno aku</Button>
                        </div>
                        <div className="py-5">
                            <Button href={"https://www.youtube.com/watch?v=ID_L0aGI9bg&list=PL3KnTfyhrIlcudeMemKd6rZFGDWyK23vx&index=13&pp=iAQB"}>Ojok diklik iki</Button>
                        </div>
                    </div>
                </div>

                <div className="text-center border-2 border-black dark:border-white p-10 my-10 bg-blue-200 dark:bg-gray-800 flex-1">
                    <div>
                        <h3 className="font-gloriaHallelujah text-2xl py-2 dark:text-white md:text-3xl">FAQ</h3>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Dalam rangka opo iki rek?</span>
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            Lho he baca atas rek, wes ditulis lho yo.
                        </p>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Oleh pesen porsi dobel gak?</span>
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            Wah ngene iki wes dikei ati malah ngrogoh rempela. Kamvret tenan. Dadi manungsa ora oleh rakus-rakus cekno umur dowo. Btw iki ocha e free refill, lek rakus ngombe ocha jek gapopo seh.
                        </p>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Marie mangan-mangan rencanae kape lapo yo?</span>
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            Wah mboh yo, tapi sing pasti kudu foto nde tempat sing strategis rek cekno cucok.
                        </p>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Onok rundown full e gak yo?</span>
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            Waduh gaonok panit acarae nang kene, dadie rundown e not efeilebel.
                        </p>
                        <p className="text-md md:text-xl font-normal py-5 leading-8 text-gray-800 dark:text-gray-200">
                        <span className="font-bold">Nyusul oleh gak? Ketoke rai ku telat</span>
                        </p>
                        <p className="text-md md:text-xl font-normal py-1 leading-8 text-gray-800 dark:text-gray-200">
                            Tergantung rai mu sak piro telat e yo, lek telat 3 hari yo ojok rek. Lek iso ojok telat rek soale iki urusane reservasi.
                        </p>
                    </div>
                </div>
            </MainWrapper>
        </div>
    );
}
