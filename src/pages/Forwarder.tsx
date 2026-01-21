import {useTranslation} from "react-i18next";
import oguri from "../assets/oguri.png";
import OgurinButton from "../components/OgurinButton.tsx";
import {PropagateLoader} from "react-spinners";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import {Turnstile} from "@marsidev/react-turnstile";
import LanguageSelect from "../components/LanguageSelect.tsx";

export default function Forwarder() {
    const {t} = useTranslation();
    const {id} = useParams();
    const navigate = useNavigate();

    const [loaderVisible, setLoaderVisible] = useState(true);
    const [notfoundVisible, setNotFoundVisible] = useState(false);
    const [forwarderVisible, setForwarderVisible] = useState(false);
    const [link, setLink] = useState('https://example.com');

    const [isOpen, setIsOpen] = useState(false);
    const [cf_token, setCfToken] = useState('BAD_TOKEN');

    const [isSendingReport, setIsSendingReport] = useState(false);

    async function sendReport() {
        if (isSendingReport) return;
        setIsSendingReport(true);
        await fetch('https://api.ogur.in/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: id,
                cf_token
            })
        });

        setIsOpen(false);
        setIsSendingReport(false);
    }

    useEffect(() => {
        fetch('https://api.ogur.in/get/' + id).then(res => {
            if (!res.ok) {
                setLoaderVisible(false);
                setNotFoundVisible(true);
                return;
            }
            res.json().then(data => {
                setLoaderVisible(false);
                if (!data.success) {
                    setNotFoundVisible(true);
                    return;
                }
                setLink(data.url);
                setForwarderVisible(true);
            })
        })
    }, [id])

    return (
        <>
            <LanguageSelect></LanguageSelect>

            <div className={"flex items-center justify-center h-screen " + (loaderVisible ? '' : 'hidden')} id="loader">
                <PropagateLoader color={"white"} className={""}></PropagateLoader>
            </div>

            <div className={notfoundVisible ? '' : 'hidden'} id="notfound">
                <h1 className="text-5xl text-white font-bold mt-12 mb-12 w-full text-center">{t('transfer.notfound')}</h1>
                <OgurinButton text={t('transfer.back')} type={"positive"} onClick={() => navigate('/')}></OgurinButton>
            </div>

            <div className={forwarderVisible ? '' : 'hidden'} id="forwarder">
                <div className="flex justify-left pl-8 flex-wrap" style={{marginLeft:'20vw'}}>
                    <h1 className={"text-5xl text-white font-bold mt-12 w-full text-left"}>{t('transfer.headsup')}</h1>
                    <h2 className={"text-4xl text-white font-semibold mt-4 w-full text-left"}>{t('transfer.info')}</h2>
                </div>

                <h3 className={"text-3xl m-16"}>{link}</h3>

                <div className={"flex justify-evenly w-1/2"} style={{marginLeft:'25vw'}}>
                    <OgurinButton text={t('transfer.cancel')} type={'negative'} onClick={() => {navigate('/')}}></OgurinButton>
                    <OgurinButton text={t('transfer.report')} type={'danger'} onClick={() => {setIsOpen(true)}}></OgurinButton>
                    <OgurinButton text={t('transfer.confirm')} type={'positive'} onClick={() => {navigate(link)}}></OgurinButton>
                </div>
            </div>

            <Dialog as={"div"} className={"relative z-10 focus:outline-none"} open={isOpen}
                    onClose={() => setIsOpen(false)}>
                <DialogBackdrop className="fixed inset-0 backdrop-blur bg-black bg-opacity-50"/>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel transition
                                     className={"w-full max-w-md rounded-2xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"}>
                            <DialogTitle as={"h3"}
                                         className={"mt-2 text-3xl text-white font-bold"}>{t('transfer.modal.report')}</DialogTitle>
                            <p className={"mt-2 text-white"}>{t('transfer.modal.reportSub')}</p>

                            <Turnstile siteKey={'0x4AAAAAACNgo80bRSrgEKab'} onSuccess={(token) => setCfToken(token)} className={"mt-8"}></Turnstile>

                            <OgurinButton text={t('modal.close')} type={"negative"}
                                          onClick={() => setIsOpen(false)}></OgurinButton>
                            <OgurinButton text={t('transfer.modal.submit')} type={"danger"}
                                          onClick={() => {
                                              // setIsOpen(false)
                                              sendReport();
                                          }}></OgurinButton>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            <div className="chibi-container">
                <img className={"chibi"} src={oguri} alt="Oguri Cap"/>
            </div>
        </>
    )
}